FROM python:3.8.16-slim-buster

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /usr/src/fundme


COPY pyproject.toml poetry.lock ./

RUN pip install poetry==1.1.15

RUN poetry config virtualenvs.create false \
    && poetry install --no-dev --no-interaction --no-ansi

COPY . ./

WORKDIR /usr/src/fundme/fundme