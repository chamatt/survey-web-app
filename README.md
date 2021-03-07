# Survey App

## Live Demo

[Survey Web App](https://chamatt.github.io/survey-web-app/)

Admin Info (needed in case you want to create new surveys):
- Email: admin@admin.com
- Password: 123456

*PS: The API is offline due to the fact that the mongodb addon for heroku got shutdown, but if you want, you can host your own api for this api.
Backend API: https://github.com/chamatt/survey-api*

## Credits

UI/UX Inpirations:
- [uixNinja](https://dribbble.com/shots/8024190-Mobile-Application-Design)
- [Bobby Saban](https://dribbble.com/shots/5440714-Concept-Survey-Builder)

Front-end with React
- [@chamatt](https://github.com/chamatt) 
- [@rezendegc](https://github.com/rezendegc)

Back-end API Development: 
- [@brenoscalzer](https://github.com/brenoscalzer) 
- [@rezendegc](https://github.com/rezendegc)

Vector Arts:
- [Icons8](https://icons8.com.br/ouch)

## Screenshots

|Homepage|Sign In|Create Survey|Survey|Results|
|--------|-------|-------------|------|-------|
|![Homepage](https://i.imgur.com/pxle2ou.png)|![Sign In](https://i.imgur.com/3nF77Ia.png)|![Create Survey](https://i.imgur.com/l8q5GQp.png)|![Survey](https://i.imgur.com/e8I5ZZL.png)|![Results](https://i.imgur.com/5FcQ2mH.png)|


## Specifications

This project was made following [app-ideas](https://github.com/florinpop17/app-ideas) Survey App specifications, in the tier 3 advanced category.

**Tier:** 3-Advanced

Surveys are a valuable part of any developers toolbox. They are useful for
getting feedback from your users on a variety of topics including application
satisfaction, requirements, upcoming needs, issues, priorities, and just plain
aggravations to name a few.

The Survey app gives you the opportunity to learn by developing a full-featured
app that will you can add to your toolbox. It provides the ability to define a
survey, allow users to respond within a predefined timeframe, and tabulate
and present results.

Users of this app are divided into two distinct roles, each having different
requirements:

- _Survey Coordinators_ define and conduct surveys. This is an administrative
  function not available to normal users.
- _Survey Respondents_ Complete surveys and view results. They have no
  administrative privileges within the app.

Commercial survey tools include distribution functionality that mass emails
surveys to Survey Respondents. For simplicity, this app assumes that surveys
open for responses will be accessed from the app's web page.

## User Stories

### General

- [x] Survey Coordinators and Survey Respondents can define, conduct, and
      view surveys and survey results from a common website
- [x] Survey Coordinators can login to the app to access administrative
      functions, like defining a survey.

### Defining a Survey

- [x] Survey Coordinator can define a survey containing 1-10 multiple choice
      questions.
- [x] Survey Coordinator can define 1-5 mutually exclusive selections to each
      question.
- [x] Survey Coordinator can enter a title for the survey.
- [x] Survey Coordinator can click a 'Cancel' button to return to the home
      page without saving the survey.
- [x] Survey Coordinator can click a 'Save' button save a survey.

### Conducting a Survey

- [x] Survey Coordinator can open a survey by selecting a survey from a
      list of previously defined surveys
- [x] Survey Coordinators can close a survey by selecting it from a list of
      open surveys
- [x] Survey Respondent can complete a survey by selecting it from a list of
      open surveys
- [x] Survey Respondent can select responses to survey questions by clicking
      on a checkbox
- [x] Survey Respondents can see that a previously selected response will
      automatically be unchecked if a different response is clicked.
- [x] Survey Respondents can click a 'Cancel' button to return to the home
      page without submitting the survey.
- [x] Survey Respondents can click a 'Submit' button submit their responses
      to the survey.
- [x] Survey Respondents can see an error message if 'Submit' is clicked,
      but not all questions have been responded to.

### Viewing Survey Results

- [x] Survey Coordinators and Survey Respondents can select the survey to
      display from a list of closed surveys
- [x] Survey Coordinators and Survey Respondents can view survey results as
      in tabular format showing the number of responses for each of the possible
      selections to the questions.

## Bonus features

- [x] Survey Respondents can create a unique account in the app
- [x] Survey Respondents can login to the app
- [x] Survey Respondents cannot complete the same survey more than once
- [x] Survey Coordinators and Survey Respondents can view graphical
      representations of survey results (e.g. pie, bar, column, etc. charts)

## Useful links and resources

Libraries for building surveys:

- [SurveyJS](https://surveyjs.io/Overview/Library/)

Some commercial survey services include:

- [Survey Monkey](https://www.surveymonkey.com/)
- [Traversy](https://youtu.be/SSDED3XKz-0)
- [Typeform](https://www.typeform.com/)


