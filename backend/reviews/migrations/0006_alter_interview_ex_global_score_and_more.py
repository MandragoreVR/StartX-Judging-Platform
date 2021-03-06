# Generated by Django 4.0.4 on 2022-05-21 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0005_alter_interview_ex_global_score_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='interview',
            name='ex_global_score',
            field=models.FloatField(default=-1),
        ),
        migrations.AlterField(
            model_name='interview',
            name='id_global_score',
            field=models.FloatField(default=-1),
        ),
        migrations.AlterField(
            model_name='interview',
            name='pc_global_score',
            field=models.FloatField(default=-1),
        ),
        migrations.AlterField(
            model_name='interview',
            name='td_global_score',
            field=models.FloatField(default=-1),
        ),
        migrations.AlterField(
            model_name='review',
            name='ex_score',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='review',
            name='id_score',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='review',
            name='pc_score',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='review',
            name='td_score',
            field=models.FloatField(),
        ),
    ]
