import re
def validate_pin(pin):
    return bool(re.match('^(\d{4}|\d{6})$', pin))