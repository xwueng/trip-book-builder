/**
 * Trip Book Questions: Google Form setup script (public copy)
 *
 * What this is: the Google Apps Script that FIRST created the "Trip Book
 * Questions" form and the email alert for new questions. It is kept here as a
 * record. See feedback_setup.md for how it fits with feedback_home_page.html.
 *
 * Not the live form: some settings were changed by hand afterward in Google
 * Forms (description, confirmation message, theme color, header image,
 * autosave). feedback_setup.md lists the live settings.
 *
 * Do not rerun it to "update" the form. Each run makes a NEW form and a NEW
 * email trigger.
 *
 * To use it: paste into a new project at script.google.com, replace
 * YOUR_EMAIL_HERE with the address that should get new questions, choose
 * createFeedbackForm, and click Run.
 */
var NOTIFY_EMAIL = 'YOUR_EMAIL_HERE'; // the real address is set only in the copy on script.google.com

function createFeedbackForm() {
  var form = FormApp.create('Trip Book Questions');

  form.setDescription(
    'Have a question or idea about the trip book? Ask here. ' +
    'No account needed. Good questions are added to the Common questions list, with answers.'
  );

  // Nobody has to sign in, and people can ask more than once.
  form.setCollectEmail(false);
  form.setLimitOneResponsePerUser(false);
  form.setAllowResponseEdits(false);
  form.setProgressBar(false);

  // 1. The question (required)
  form.addParagraphTextItem()
    .setTitle('Your question or comment')
    .setRequired(true);

  // 2. Name (optional)
  form.addTextItem()
    .setTitle('Your name (optional)');

  // 3. Email (optional, must look like an email if filled in)
  var emailCheck = FormApp.createTextValidation()
    .setHelpText('Please enter an email address, like name@gmail.com')
    .requireTextIsEmail()
    .build();
  form.addTextItem()
    .setTitle("Your email, if you'd like a reply (optional)")
    .setValidation(emailCheck);

  form.setConfirmationMessage('Thank you! Your question was sent.');
  form.setShowLinkToRespondAgain(true);

  // New forms may start unpublished. Publish it so people can open it.
  try { form.setPublished(true); } catch (e) { /* older accounts publish automatically */ }

  // Email me the full question each time someone submits.
  ScriptApp.newTrigger('emailNewQuestion')
    .forForm(form)
    .onFormSubmit()
    .create();

  var link = form.shortenFormUrl(form.getPublishedUrl());
  Logger.log('Form link to share: ' + link);
  Logger.log('Edit the form here: ' + form.getEditUrl());
  Logger.log('New questions will be emailed to: ' + NOTIFY_EMAIL);
}

/** Runs automatically on each submission. Do not run it by hand. */
function emailNewQuestion(e) {
  var question = '', name = '', email = '';
  e.response.getItemResponses().forEach(function (r) {
    var title = r.getItem().getTitle();
    var answer = String(r.getResponse() || '').trim();
    if (title.indexOf('question') !== -1) question = answer;
    else if (title.indexOf('name') !== -1) name = answer;
    else if (title.indexOf('email') !== -1) email = answer;
  });

  var body =
    'Question:\n' + question + '\n\n' +
    'From: ' + (name || '(no name)') + '\n' +
    'Email: ' + (email || '(none given)') + '\n\n' +
    (email ? 'Press Reply to answer them directly.' : 'No email given, so add the answer to Common questions.');

  var options = { name: 'Trip Book Questions' };
  if (email) options.replyTo = email;

  MailApp.sendEmail(NOTIFY_EMAIL, 'New trip book question' + (name ? ' from ' + name : ''), body, options);
}
