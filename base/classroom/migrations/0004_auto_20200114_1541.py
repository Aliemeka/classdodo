# Generated by Django 3.0.2 on 2020-01-14 14:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('classroom', '0003_auto_20200113_1408'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='test',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='questions', to='classroom.Test'),
        ),
        migrations.AlterField(
            model_name='test',
            name='subject',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='tests', to='classroom.Subject'),
        ),
    ]