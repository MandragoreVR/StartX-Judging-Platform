# Generated by Django 4.0.4 on 2022-05-21 10:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='overall_debrief',
            field=models.CharField(default='Excellent global work!', max_length=500),
            preserve_default=False,
        ),
    ]
