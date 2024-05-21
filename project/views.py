from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def home(response):
    return render(response, 'project/home.html')


def about(response):
    return render(response, 'project/about.html')

def services(response):
    return render(response, 'project/services.html')

