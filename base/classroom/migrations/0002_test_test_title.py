# Generated by Django 3.0.2 on 2020-01-13 09:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classroom', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='test',
            name='test_title',
            field=models.CharField(default='', max_length=20),
        ),
    ]
