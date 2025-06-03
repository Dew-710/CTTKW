INSTALLED_APPS = [
    'cvapp'
]

STATIC_URL = '/static/'
STATICFILES_DIRS = [BASE_DIR / "cvapp/static"]

TEMPLATES = [
    {
        'DIRS': [BASE_DIR / 'cvapp/templates']
    },
]