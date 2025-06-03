import pdfkit
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.conf import settings
from django.shortcuts import render
import os

def export_cv_pdf(request):
    html = render_to_string("../Pages/cv2.html")

    config = None
    if os.name == "nt":
        path_wkhtmltopdf = r'D:\wkhtmltopdf\bin\wkhtmltopdf.exe'
        config = pdfkit.configuration(wkhtmltopdf=path_wkhtmltopdf)

    pdf = pdfkit.from_string(html, False, configuration=config, options={'enable-local-file-access': ''})

    response = HttpResponse(pdf, content_type='application/pdf')
    response['Content-Disposition'] = 'attachment; filename="cv1.pdf"'
    return response

def cv2_view(request):
    return render(request, '..Pages/cv2.html')