# Generated by Django 3.0.2 on 2020-01-13 13:08

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('classroom', '0002_test_test_title'),
    ]

    operations = [
        migrations.CreateModel(
            name='Choice',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('choice', models.CharField(max_length=100)),
            ],
        ),
        migrations.RemoveField(
            model_name='test',
            name='test_number',
        ),
        migrations.AlterField(
            model_name='subject',
            name='teacher',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL),
        ),
        migrations.DeleteModel(
            name='Option',
        ),
        migrations.AddField(
            model_name='question',
            name='answer',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='answer', to='classroom.Choice'),
        ),
        migrations.AddField(
            model_name='question',
            name='options',
            field=models.ManyToManyField(to='classroom.Choice'),
        ),
    ]