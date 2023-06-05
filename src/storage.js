/**
 * @file A simplified and modified version of MRG's localstorage.js. Only
 * contains methods used in loading and storing epilog facts, rules, templates,
 * and metadata for english explanations.
 */

import * as epilog from './epilog.js';

//==============================================================================
// localStorage data loading
//==============================================================================
//------------------------------------------------------------------------------
// loadEpilogAndTemplates (async)
// unloadEpilogAndTemplates
// getEpilogAndTemplates
//
// setFactsFile
// setRulesFile
// setMetadataFile
// setTemplatesFile
//
// loadEpilogFacts (async)
// loadEpilogRules (async)
// loadEpilogMetadata (async)
// loadEnglishTemplates (async)
//
// setAllOptions
// setOption
//
// getAllOptions
// getOption
//
// isEpilogFactsLoaded
// isEpilogRulesLoaded
// isEpilogMetadataLoaded
// isEnglishTemplatesLoaded
//
// TemplateWrapper (class)
// getEpilogFacts
// getEpilogRules
// getEpilogMetadata
// getEnglishTemplates
//------------------------------------------------------------------------------

export const EPILOG_FACTS_KEY = "facts";
export const EPILOG_RULES_KEY = "rules";
export const EPILOG_METADATA_KEY = "metadata";
export const ENGLISH_TEMPLATES_KEY = "english_templates";

export const UPLOADED_FILENAME_KEY_SUFFIX = "_uploaded_filename";

export const OPTION_KEY_PREFIX = "option_";

// These specify from which files to load facts, rules, metadata, and templates.
// When these are null, we load from hidden divs on the webpage.
// Can be set by the user to a file on their local machine.
var epilogFactsFile = null;
var epilogRulesFile = null;
var epilogMetadataFile = null;
var englishTemplatesFile = null;

// Note: To keep track of whether uploaded data is being used between page loads/refreshes, 
// we set localStorage[SOME_KEY_CONST + "_selected_filename"] to the name of the uploaded file.
// If using default data, the corresponding localStorage[SOME_KEY_CONST + "_selected_filename"] is set to "null".


/* Loads data into localStorage for global access and persistence between sessions.
* @param overwriteExisting: a boolean or an Object with keys {facts, rules, metadata, english_templates}
*/ 
export async function loadEpilogAndTemplates(overwriteExisting) {
    let overwriteExisting_parameterized = null;

    // If input param is a boolean, set the value of each key to that value.
    if (typeof overwriteExisting === "boolean") {
        overwriteExisting_parameterized = {
            facts: overwriteExisting,
            rules: overwriteExisting,
            metadata: overwriteExisting,
            english_templates: overwriteExisting,
        };
    } else {
        overwriteExisting_parameterized = overwriteExisting
    }

    await loadEpilogFacts(overwriteExisting_parameterized.facts);
    await loadEpilogRules(overwriteExisting_parameterized.rules)
    await loadEpilogMetadata(overwriteExisting_parameterized.metadata)
    await loadEnglishTemplates(overwriteExisting_parameterized.english_templates);
}

// Deletes data from localstorage.
export function unloadEpilogAndTemplates() {
    localStorage.removeItem(EPILOG_FACTS_KEY);
    localStorage.removeItem(EPILOG_RULES_KEY);
    localStorage.removeItem(EPILOG_METADATA_KEY);
    localStorage.removeItem(ENGLISH_TEMPLATES_KEY);

    localStorage.removeItem(EPILOG_FACTS_KEY + UPLOADED_FILENAME_KEY_SUFFIX);
    localStorage.removeItem(EPILOG_RULES_KEY + UPLOADED_FILENAME_KEY_SUFFIX);
    localStorage.removeItem(EPILOG_METADATA_KEY + UPLOADED_FILENAME_KEY_SUFFIX);
    localStorage.removeItem(ENGLISH_TEMPLATES_KEY + UPLOADED_FILENAME_KEY_SUFFIX);
}

// Reads string data from localStorage into a usable format:
// Epilog facts, rules, and metadata, and an array of templates. The template format is described above getTemplates())
export function getEpilogAndTemplates() {
    return {
        facts: getEpilogFacts(),
        rules: getEpilogRules(),
        metadata: getEpilogMetadata(),
        english_templates: getEnglishTemplates()
    };
}


export function setFactsFile(factsFile) {
    epilogFactsFile = factsFile;
}

export function setRulesFile(rulesFile) {
    epilogRulesFile = rulesFile;
}

export function setMetadataFile(metadataFile) {
    epilogMetadataFile = metadataFile;
}

export function setTemplatesFile(templatesFile) {
    englishTemplatesFile = templatesFile;
}

async function loadEpilogFacts(overwriteExisting) {
    if (!overwriteExisting && isEpilogFactsLoaded()) {
        return;
    }

    let factsTextData = "";
    let factsSelectedFileName = "";

    // Default facts
    if (epilogFactsFile === null) {
        factsTextData = document.getElementById(EPILOG_FACTS_KEY).textContent;
        factsSelectedFileName = "null";
    } else {
        // Uploaded by user
        factsTextData = await epilogFactsFile.text();
        factsSelectedFileName = epilogFactsFile.name;
    }

    localStorage[EPILOG_FACTS_KEY] = factsTextData;
    localStorage[EPILOG_FACTS_KEY + UPLOADED_FILENAME_KEY_SUFFIX] = factsSelectedFileName;
}

async function loadEpilogRules(overwriteExisting) {
    if (!overwriteExisting && isEpilogRulesLoaded()) {
        return;
    }
    
    let rulesTextData = "";
    let rulesSelectedFileName = "";

    if (epilogRulesFile === null) {
        rulesTextData = document.getElementById(EPILOG_RULES_KEY).textContent;
        rulesSelectedFileName = "null";
    } else {
        rulesTextData = await epilogRulesFile.text();
        rulesSelectedFileName = epilogRulesFile.name;
    }

    localStorage[EPILOG_RULES_KEY] = rulesTextData;
    localStorage[EPILOG_RULES_KEY + UPLOADED_FILENAME_KEY_SUFFIX] = rulesSelectedFileName;
}

async function loadEpilogMetadata(overwriteExisting) {
    if (!overwriteExisting && isEpilogMetadataLoaded()) {
        return;
    }
    
    let metadataTextData = "";
    let metadataSelectedFileName = "";

    if (epilogMetadataFile === null) {
        metadataTextData = document.getElementById(EPILOG_METADATA_KEY).textContent;
        metadataSelectedFileName = "null";
    } else {
        metadataTextData = await epilogMetadataFile.text();
        metadataSelectedFileName = epilogMetadataFile.name;
    }

    localStorage[EPILOG_METADATA_KEY] = metadataTextData;
    localStorage[EPILOG_METADATA_KEY + UPLOADED_FILENAME_KEY_SUFFIX] = metadataSelectedFileName;
}

async function loadEnglishTemplates(overwriteExisting) {
    if (!overwriteExisting && isEnglishTemplatesLoaded()) {
        return;
    }
    
    let englishTemplatesTextData = "";
    let englishTemplatesSelectedFileName = "";

    if (englishTemplatesFile === null) {
        englishTemplatesTextData = document.getElementById(ENGLISH_TEMPLATES_KEY).textContent;
        englishTemplatesSelectedFileName = "null";
    } else {
        englishTemplatesTextData = await englishTemplatesFile.text();
        englishTemplatesSelectedFileName = englishTemplatesFile.name;
    }

    localStorage[ENGLISH_TEMPLATES_KEY] = englishTemplatesTextData;
    localStorage[ENGLISH_TEMPLATES_KEY + UPLOADED_FILENAME_KEY_SUFFIX] = englishTemplatesSelectedFileName;
}

export function setAllOptions(overwriteExisting, options) {
    for (const [optionName, val] of Object.entries(options)) {
        setOption(overwriteExisting, optionName, val);
    }
}

function setOption(overwriteExisting, optionName, newVal) {
    const OPTION_KEY = OPTION_KEY_PREFIX + optionName; 

    if (!overwriteExisting && isOptionLoaded(optionName)) {
        return;
    }

    localStorage[OPTION_KEY] = newVal;
}

export function getAllOptions() {
    let options = {};

    for (const key in localStorage) {
        if (!key.startsWith(OPTION_KEY_PREFIX)) {
            continue;
        }

        let optionName = key.slice(OPTION_KEY_PREFIX.length);

        options[optionName] = getOption(optionName);
    }
    
    return options;
}

function getOption(optionName) {
    if (!isOptionLoaded(optionName)) {
        console.log("[Warning] getOption -",optionName,"is not loaded.")
        return false;
    }

    return localStorage[OPTION_KEY_PREFIX + optionName];
}

function isOptionLoaded(optionName) {
    return localStorage.getItem(OPTION_KEY_PREFIX + optionName) !== null;
}

export function isEpilogFactsLoaded() {
    return localStorage.getItem(EPILOG_FACTS_KEY) !== null;
}

export function isEpilogRulesLoaded() {
    return localStorage.getItem(EPILOG_RULES_KEY) !== null;
}

export function isEpilogMetadataLoaded() {
    return localStorage.getItem(EPILOG_METADATA_KEY) !== null;
}

export function isEnglishTemplatesLoaded() {
    return localStorage.getItem(ENGLISH_TEMPLATES_KEY) !== null;
}

//Parses the Epilog fact string from localStorage into an Epilog fact set 
export function getEpilogFacts() {
    return epilog.definemorefacts([], epilog.readdata(localStorage[EPILOG_FACTS_KEY]));
}

//Parses Epilog rules string from localStorage into an Epilog rule set
export function getEpilogRules() {
    return epilog.definemorerules([], epilog.readdata(localStorage[EPILOG_RULES_KEY]));
}

//Parses Epilog metadata string from localStorage into an Epilog fact set
export function getEpilogMetadata() {
    return epilog.definemorefacts([], epilog.readdata(localStorage[EPILOG_METADATA_KEY]));
}

class TemplateWrapper {
    /* Arguments:
    *   queryGoal: an Epilog query goal as a string or list.
    *   templateString: the unfilled template string for that query goal.
    *   varSequence: an array containing the variables in the template that appear in the query goal, 
    *                            ordered as they appear in the template.
    *   proceduralType: the type of procedural template this is. 
    *       If custom, is 'none'.
    *       If for a unique attribute relation, is 'attributeRelation_unique'.
    * 
    * This format is extremely useful for operations performed in english_explanation.js.
    */
   
    constructor(queryGoal, templateString, varSequence, proceduralType = 'none') {
        if (typeof(queryGoal) === "string") {
            queryGoal = epilog.read(queryGoal);
        }
        this.queryGoal = queryGoal;
        this.templateString = templateString;
        this.varSequence = varSequence;

        this.proceduralType = proceduralType;
    }

    getQueryAsList() {
        return this.queryGoal;
    }
}

/* Parses input string of english templates into an array of TemplateWrappers.
 * If no argument provided, parses string data from localStorage[ENGLISH_TEMPLATES_KEY].
 * 
 * Expected format of string data in localStorage[ENGLISH_TEMPLATES_KEY]:
 *      - A series of template pairs of the form (epilog_query_goal,"string containing an English template").
    *      - Each template pair should be on its own line.
    *      - The epilog_query_goal can contain variables, as in standard Epilog.
    *      - The template string can (and should) contain the same variables used in the epilog_query_goal.
    *           - Variables in the template should be surrounded by '$' characters. (e.g. "These are variables: $V$ and $VAR2$")
    *      - The template string should not contain variables that don't appear in the epilog_query_goal.
    *      - The template string should be surrounded with double quotes.
 * 
 * Returns an array containing one TemplateWrapper for each template.
 * If invalid argument or templates haven't been loaded into localStorage, returns false.
 * 
 * Note: can also contain arguments for procedural templates, in addition to template pairs. See the documentation for the constructProceduralTemplate methods for formatting.
 * 
 * e.g. if localStorage[ENGLISH_TEMPLATES_KEY] is the two-line string "(claim.policy(C,P),"the policy of $C$ is $P$") \n (policy.startdate(P,S),"$P$ began on $S$")",
        returns [new TemplateWrapper("claim.policy(C,P)", "the policy of $C$ is $P$", ["C", "P"]),
                 new TemplateWrapper("policy.startdate(P,S)", "$P$ began on $S$", ["P", "S"])]
*/

export function getEnglishTemplates(englishTemplateStr) {
    if (!englishTemplateStr) {
        if (!isEnglishTemplatesLoaded()) {
            console.log("[Warning] getEnglishTemplates: templates have not been loaded into localStorage.");
            return false;
        }

        englishTemplateStr = localStorage[ENGLISH_TEMPLATES_KEY];
    }
    else if (typeof(englishTemplateStr) !== "string") {
        console.log("[Warning] getEnglishTemplates: input must be a string.");
        return false;
    }

    let templatePairStrings = englishTemplateStr.trim().split('\n');

    let templates = [];

    for (const argStr of templatePairStrings) {
        // Ignore comments
        if (argStr.trim()[0] === '%') {
            continue;
        }

        //Convert to an epilog string to delegate parsing to epilog.js
        const argList = epilog.read("english" + argStr.trim()).slice(1);

        // Procedural template for attribute relations.
            // Assumes the attribute relation is unique.
        if (argList.length === 3) {
            let proceduralTemplate = constructProceduralTemplate_attributeRelation_unique(argList);
            if (proceduralTemplate !== false) {
                templates.push(proceduralTemplate);
            }
            continue;
        }

        // Custom template.
        const [queryGoal, templateStr] = argList;
       
        //Get the variables from the goal
        const varSet = epilog.vars(queryGoal);
        
        //Scan the templateStr for instances of the vars, if any are present in the goal
        let varSequence = varSeqFromStr(templateStr, varSet);

        // Add the assembled template
        templates.push(new TemplateWrapper(queryGoal, templateStr, varSequence));
    } 

    //Return false if no templates parsed from input
    if (templates.length === 0) {
        console.log("[Warning] getEnglishTemplates: no templates parsed from string.");
        return false;
    }

    return templates;
}

/* Parses input array of 3 strings into a TemplateWrapper with a procedural template.
 * Assumes the attribute relation is unique.
 *      - Does not check metadata for this, primarily because, in explanations, we want to treat attributes as though they're unique when they are unique for a given class instance.
 *  
 * Expected format of array of strings:
 *      - first element: The attribute relation that the template will apply to.
 *      - second element: The natural language term for the attribute, excluding determiners/articles. Should be surrounded by double quotes.
 *      - third element: The end of the template, which must contain one-and-only-one variable. Should be surrounded by double quotes.
 * 
 * If the third element does not contain exactly one variable, returns false.
 * 
 * e.g. if localStorage[ENGLISH_TEMPLATES_KEY] has the two-line string 
 * "(claim.priorhospitalization, "prior hospitalization", "listed in $C$") \n (country.continent, "continent", "on which $X$ resides")",
 *      In the first case proceduralTemplateArgs will be ['claim.priorhospitalization', '"prior hospitalization"', '"listed in $C$"'] and 
 *      this will return new TemplateWrapper("claim.priorhospitalization(C,CA)", "$CA$ is the prior hospitalization listed in $C$", ["CA", "C"], 'attributeRelation_unique')
 * 
 *  
 *      In the second case proceduralTemplateArgs will be ['country.continent', '"continent"', '"on which $X$ resides"'] and 
 *      this will return new TemplateWrapper("country.continent(X,XA)", "$XA$ is the continent on which $X$ resides", ["XA", "X"], 'attributeRelation_unique')
 * 
 * 
 * Paired with the replaceWithType option, these should appear in explanations as:
 * "[the (ordinal) hospitalization] is the prior hospitalization listed in [the (ordinal2) country]"
 * 
 * [the (ordinal) continent] is the continent on which [the (ordinal2) country] resides
 * 
 * 
 * We assume the attribute relation is unique so that when we say "the [englishAttributeName] of the [class instance replacementStr]" it is unambiguous what object we are referring to.
*/
function constructProceduralTemplate_attributeRelation_unique(proceduralTemplateArgs) {
    let [attributeRelation, englishAttributeName, templateSuffix] = proceduralTemplateArgs;

    //Trim the quotes off the args.
    englishAttributeName = englishAttributeName.slice(1, -1);
    templateSuffix = templateSuffix.slice(1, -1);

    let varSeq = varSeqFromStr(templateSuffix);
    if (varSeq.length !== 1) {
        console.log("[Warning] constructProceduralTemplate_attributeRelation_unique - template suffix does not contain exactly one variable:",templateSuffix);
        return false;
    } 
    
    // Remove the $ symbols from the beginning and end.
    varSeq[0] = varSeq[0].slice(1, -1);

    const classInstanceVar = varSeq[0];
    
    // Create a variable that will match the attribute value and that we know was not used in the templateSuffix.
    const attributeValueVar = classInstanceVar + 'A';

    // Construct the template string.
    const templateStr = ['$'+attributeValueVar+'$', 'is the', englishAttributeName, templateSuffix].join(' ');

    // Update varSeq to reflect the final structure of the template string.
    varSeq = [attributeValueVar].concat(varSeq);

    // Assemble the attribute relation query goal
    const queryGoal = attributeRelation + '(' + classInstanceVar + ',' + attributeValueVar + ')';

    return new TemplateWrapper(queryGoal, templateStr, varSeq, 'attributeRelation_unique');
}

/* Parses input string for variables of the form $VAR$ and returns an array of the variables that appear in the string.
 * Only variables that appear in the input varSet will be parsed from the input.
 *      varSet is assumed to be a list of strings with no repeat elements.
 * If varSet === 'all', all variables are matched.
 * 
 * The returned array will contain strings, will have the variables in the order they appear in the input, and will not have $ symbols surrounding the vars.
 *
 * e.g. if the input was "$C$ is the $X$ of $C$",
 *      would return ['C', 'X', 'C']
 */
function varSeqFromStr(strWithVars, varSet = 'all') {
    let varSequence = [];

    // Match every variable.
    if (varSet === 'all') {
        // Does not match underscores. Weird bugs arose due to my not understanding exactly which underscores
        // TODO: Match variables beginning with underscores
        let re = new RegExp('\\$[A-Z]\\w*\\$', 'g');
        varSequence = strWithVars.match(re);

        // None found
        if (varSequence === null) {
            return [];
        }
        return varSequence;
    }


    // Match specified variables.
    if (varSet.length !== 0) {
        let re = new RegExp('\\$' + varSet.join('\\$|\\$') + '\\$', 'g');
        varSequence = strWithVars.match(re);

        if (varSequence === null) {
            varSequence = [];
        }

        //Remove the '$' symbols
        varSequence.forEach((matchedStr, index) => {
            varSequence[index] = matchedStr.slice(1, matchedStr.length-1);
        });
    }

    return varSequence;
}

//==============================================================================
//==============================================================================
//==============================================================================
