# Generated by Django 4.0.4 on 2022-05-21 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0003_alter_interview_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='review',
            name='publication_date',
            field=models.CharField(max_length=16),
        ),
    ]
