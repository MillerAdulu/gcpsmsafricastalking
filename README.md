# Africa's Talking SMS App

## Introduction

This is a sample nodejs cloud function to allow users send text messages to phone numbers via the [Africa's Talking](https://africastalking.com/) SMS api

## Features
  1. Supports application/json and x-www-form-urlencoded requests
  2. Supports sending SMSs to only one number

## Installation
  1. Clone this repository
  2. Set the `.env` variables as shown in the .env.yaml in the Cloud Functions console for your project
  3. Deploy the application
  4. Hit the target URL with a http POST request containing the `phoneNumber` and `textMessage` body parameters.

  *The phone number **MUST** start with the +254 extension*