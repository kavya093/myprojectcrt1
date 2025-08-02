from django.shortcuts import render, redirect
from .models import Student
from .models import Patient
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login as auth_login, authenticate, logout as auth_logout
from django.contrib.auth.decorators import login_required


def contact(request):
    c = Student.objects.all()
    return render(request, 'contact.html', {'csd_list': c})

def details(request, slug):
    student = Student.objects.get(slug=slug)
    return render(request, 'details.html', {'student': student})

def detailsofpatient(request, slug):
    patient = Patient.objects.get(slug=slug)
    return render(request, 'detailsofpatient.html', {'patient': patient})
def register(request): 
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("contact")
    else:
        form = UserCreationForm()
    
    return render(request, 'register.html', {'form': form})


def login(request):
    if request.method == 'POST':
        form = AuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect("contact")
    else:
        form = AuthenticationForm()

    return render(request, 'login.html', {'form': form})  # ❗Use string here


def logout(request):
    if request.method == 'POST':
        logout(request)
        return redirect("contact")
    return render(request,'logout.html')