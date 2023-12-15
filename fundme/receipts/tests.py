from django.test import TestCase
from django.contrib.auth.models import User
from .models import Receipt

# test text
class ReceiptTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(username='testuser', password='12345')
        Receipt.objects.create(
            receipt_date='2021-04-01', receipt_amount=100,
            receipt_description='test receipt',
            receipt_category='test category', receipt_user=self.user
        )

    def test_receipt(self):
        receipt = Receipt.objects.get(receipt_description='test receipt')
        self.assertEqual(receipt.receipt_description, 'test receipt')
        self.assertEqual(receipt.receipt_category, 'test category')
        self.assertEqual(receipt.receipt_amount, 100)
        self.assertEqual(receipt.receipt_date.strftime("%Y-%m-%d"), '2021-04-01')
        self.assertEqual(receipt.receipt_user, self.user)
