const mongoose = require('mongoose')


/**
 * Job Description Schema Structure
 * --------------------------------
 * jobDescription : String
 *      - Full job description text of the role
 * 
 * resumeText : String
 *      - Extracted text content from the uploaded resume
 * 
 * selfDescription : String
 *      - Candidate's self introduction or personal summary
 * 
 * score : {
 *      matchScore : Number
 *          - AI calculated score showing how well the resume matches the job description
 * }
 * 
 * technicalQuestions : [
 *      {
 *          question : String
 *              - Technical interview question generated based on resume and job description
 * 
 *          intention : String
 *              - Why this question is being asked (concept or skill being tested)
 * 
 *          answer : String
 *              - Candidate's answer to the question
 *      }
 * ]
 * 
 * behavioralQuestions : [
 *      {
 *          question : String
 *              - Behavioral or HR type interview question
 * 
 *          intention : String
 *              - Purpose of the question (communication, leadership, teamwork etc.)
 * 
 *          answer : String
 *              - Candidate's answer
 *      }
 * ]
 * 
 * skillGaps : [
 *      {
 *          skill : String
 *              - Missing or weak skill identified from resume vs job description
 * 
 *          severity : String
 *              - Importance level of the missing skill
 *              - Allowed values : "low", "medium", "high"
 *      }
 * ]
 * 
 * preparationPlan : [
 *      {
 *          title : String
 *              - Topic or skill the candidate should prepare
 * 
 *          description : String
 *              - Guidance or steps to improve that skill
 *      }
 * ]
 */