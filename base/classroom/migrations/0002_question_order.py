# Generated by Django 3.0.2 on 2020-01-21 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classroom', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='order',
            field=models.SmallIntegerField(null=True),
        ),
    ]
