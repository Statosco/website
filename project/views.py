from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(response):
    return render(response, 'project/home.html')


def about(response):
    return render(response, 'project/about.html')


def profile(response):
    return render(response, 'project/credetials.html')


from django.http import FileResponse, Http404

import os
from django.conf import settings

def download_cv(request):
    file_path = os.path.join(settings.BASE_DIR, 'project', 'static', 'project', 'files', 'SolomonJessecv.pdf')
    if os.path.exists(file_path):
        return FileResponse(open(file_path, 'rb'), as_attachment=True, filename='SolomonJessecv.pdf')
    else:
        raise Http404("CV not found")

# views.py
from django.shortcuts import render, redirect
from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.conf import settings
from django import forms

class ContactForm(forms.Form):
    full_name = forms.CharField(max_length=100)
    city = forms.CharField(max_length=100)
    email = forms.EmailField()
    description = forms.CharField(widget=forms.Textarea)

def services(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            full_name = form.cleaned_data['full_name']
            city = form.cleaned_data['city']
            user_email = form.cleaned_data['email']
            description = form.cleaned_data['description']

            template = render_to_string('project/talk.txt', {
                'full_name': full_name,
                'city': city,
                'user_email': user_email,
                'description': description
            })

            email = EmailMessage(
                'New Contact Form Submission',
                template,
                user_email,  # From email (user's email address)
                ['siteforlio@gmail.com'],  # To email (your email address)
            )
            email.send()

            return redirect('home')  # Replace with your success URL or message
    else:
        form = ContactForm()

    return render(request, 'project/services.html', {'form': form})
