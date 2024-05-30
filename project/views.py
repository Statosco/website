from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(response):
    return render(response, 'project/home.html')


def about(response):
    return render(response, 'project/about.html')


# views.py
from django.shortcuts import render, redirect
from django.core.mail import EmailMessage
from django.conf import settings
from django.template.loader import render_to_string
from .forms import ContactForm

def services(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            full_name = form.cleaned_data['full_name']
            city = form.cleaned_data['city']
            user_email = form.cleaned_data['email']  # User's email address
            description = form.cleaned_data['description']

            template = render_to_string('project/talk.html', {
                'full_name': full_name,
                'city': city,
                'description': description
            })

            email = EmailMessage(
                'New Contact Form Submission',  # Subject of the email
                template,  # Body of the email, rendered from the template
                user_email,  # From email (user's email address)
                ['your_email@example.com'],  # To email, replace with your email address
            )
            email.send()

            return redirect('success_url')  # Replace with your success URL or message
    else:
        form = ContactForm()

    return render(request, 'project/services.html', {'form': form})
