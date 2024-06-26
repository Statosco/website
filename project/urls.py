from django.urls import path

from . import views

urlpatterns =[
    path("home/", views.home, name="home"),
    path("about/", views.about, name="about"),
    path("", views.services, name="services"),
    path('download-cv/', views.download_cv, name='download_cv'),
    path('socials/', views.socials, name='socials'),
]