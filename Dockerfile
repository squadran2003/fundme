FROM python:3.8.16-slim-buster

WORKDIR /usr/src/fundme

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY . .

RUN pip install poetry==1.1.15

RUN poetry config virtualenvs.create false \
    && poetry install --no-dev --no-interaction --no-ansi






