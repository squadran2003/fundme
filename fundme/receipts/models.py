from django.db import models
from django.contrib.auth.models import User


class Receipt(models.Model):
    receipt_date = models.DateField()
    receipt_amount = models.DecimalField(max_digits=10, decimal_places=2)
    receipt_description = models.CharField(max_length=100)
    receipt_category = models.CharField(max_length=50)
    receipt_user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.receipt_description
