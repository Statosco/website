from django import forms

class ContactForm(forms.Form):
    full_name = forms.CharField(max_length=100)
    city = forms.CharField(max_length=100)
    email = forms.EmailField()
    description = forms.CharField(widget=forms.Textarea)