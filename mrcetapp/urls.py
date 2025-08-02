from django.urls import path
from . import views

urlpatterns = [
    path('', views.contact, name='contact'),
    path('details/<slug:slug>/', views.details, name='details'),
    path('detailsofpatient/<slug:slug>/', views.detailsofpatient, name='detailsofpatient'),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]
