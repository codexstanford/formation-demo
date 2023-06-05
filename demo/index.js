const TRAD_CONTRACT_ELEM_SUFFIX = "-text";
const OPTION_ELEM_SUFFIX = "-option";

claim_spec_dataset = []

function print_claim_dataset() {
    console.log("======== Claim Dataset ========")

    for (const fact of claim_spec_dataset) {
        console.log(grind(fact));
    }
};

//=================================================================================
// Element IDs for elements in the traditional contract and contract specification
//=================================================================================

// Section 1
const WELLNESS_VISIT_CONDITION_PREFIX = "wellness_visit_condition";
const WELLNESS_VISIT_CONDITION_OPTION_ID = WELLNESS_VISIT_CONDITION_PREFIX + OPTION_ELEM_SUFFIX;
const WELLNESS_VISIT_CONDITION_TRAD_CONTRACT_ID = WELLNESS_VISIT_CONDITION_PREFIX + TRAD_CONTRACT_ELEM_SUFFIX;

// Section 2
const USA_HOSPITAL_CONDITION_PREFIX = "usa_hospital_condition";
const USA_HOSPITAL_CONDITION_OPTION_ID = USA_HOSPITAL_CONDITION_PREFIX + OPTION_ELEM_SUFFIX;
const USA_HOSPITAL_CONDITION_TRAD_CONTRACT_ID = USA_HOSPITAL_CONDITION_PREFIX + TRAD_CONTRACT_ELEM_SUFFIX;

// Section 3
const GENERAL_EXCLUSION_SKYDIVING_PREFIX = "general_exclusion_skydiving";
const GENERAL_EXCLUSION_SKYDIVING_OPTION_ID = GENERAL_EXCLUSION_SKYDIVING_PREFIX + OPTION_ELEM_SUFFIX;
const GENERAL_EXCLUSION_SKYDIVING_TRAD_CONTRACT_ID = GENERAL_EXCLUSION_SKYDIVING_PREFIX + TRAD_CONTRACT_ELEM_SUFFIX;

const GENERAL_EXCLUSION_MILITARY_SERVICE_PREFIX = "general_exclusion_military_service";
const GENERAL_EXCLUSION_MILITARY_SERVICE_OPTION_ID = GENERAL_EXCLUSION_MILITARY_SERVICE_PREFIX + OPTION_ELEM_SUFFIX;
const GENERAL_EXCLUSION_MILITARY_SERVICE_TRAD_CONTRACT_ID = GENERAL_EXCLUSION_MILITARY_SERVICE_PREFIX + TRAD_CONTRACT_ELEM_SUFFIX;

const GENERAL_EXCLUSION_FIREFIGHTER_SERVICE_PREFIX = "general_exclusion_firefighter_service";
const GENERAL_EXCLUSION_FIREFIGHTER_SERVICE_OPTION_ID = GENERAL_EXCLUSION_FIREFIGHTER_SERVICE_PREFIX + OPTION_ELEM_SUFFIX;
const GENERAL_EXCLUSION_FIREFIGHTER_SERVICE_TRAD_CONTRACT_ID = GENERAL_EXCLUSION_FIREFIGHTER_SERVICE_PREFIX + TRAD_CONTRACT_ELEM_SUFFIX;

const GENERAL_EXCLUSION_POLICE_SERVICE_PREFIX = "general_exclusion_police_service";
const GENERAL_EXCLUSION_POLICE_SERVICE_OPTION_ID = GENERAL_EXCLUSION_POLICE_SERVICE_PREFIX + OPTION_ELEM_SUFFIX;
const GENERAL_EXCLUSION_POLICE_SERVICE_TRAD_CONTRACT_ID = GENERAL_EXCLUSION_POLICE_SERVICE_PREFIX + TRAD_CONTRACT_ELEM_SUFFIX;

const GENERAL_EXCLUSION_AGE_PREFIX = "general_exclusion_age";

const GENERAL_EXCLUSION_AGE_IS_CONSTRAINT_PREFIX = GENERAL_EXCLUSION_AGE_PREFIX + "_is_constraint";
const GENERAL_EXCLUSION_AGE_IS_CONSTRAINT_OPTION_ID = GENERAL_EXCLUSION_AGE_IS_CONSTRAINT_PREFIX + OPTION_ELEM_SUFFIX;
const GENERAL_EXCLUSION_AGE_IS_CONSTRAINT_TRAD_CONTRACT_ID = GENERAL_EXCLUSION_AGE_IS_CONSTRAINT_PREFIX + TRAD_CONTRACT_ELEM_SUFFIX;

const GENERAL_EXCLUSION_AGE_AMOUNT_PREFIX = GENERAL_EXCLUSION_AGE_PREFIX + "_amount";
const GENERAL_EXCLUSION_AGE_AMOUNT_OPTION_ID = GENERAL_EXCLUSION_AGE_AMOUNT_PREFIX + OPTION_ELEM_SUFFIX;
const GENERAL_EXCLUSION_AGE_AMOUNT_TRAD_CONTRACT_ID = GENERAL_EXCLUSION_AGE_AMOUNT_PREFIX + TRAD_CONTRACT_ELEM_SUFFIX;



// Section 5
const BENEFIT_AMOUNT_PREFIX = "benefit_amount";
const BENEFIT_AMOUNT_OPTION_ID = BENEFIT_AMOUNT_PREFIX + OPTION_ELEM_SUFFIX;
const BENEFIT_AMOUNT_TRAD_CONTRACT_ID = BENEFIT_AMOUNT_PREFIX + TRAD_CONTRACT_ELEM_SUFFIX;

const PREMIUM_AMOUNT_PREFIX = "premium_amount";
const PREMIUM_AMOUNT_OPTION_ID = PREMIUM_AMOUNT_PREFIX + OPTION_ELEM_SUFFIX;
const PREMIUM_AMOUNT_TRAD_CONTRACT_ID = PREMIUM_AMOUNT_PREFIX + TRAD_CONTRACT_ELEM_SUFFIX;


// Update button
const UPDATE_BUTTON_ID = "update_button";

// Auto Update checkbox
const AUTO_UPDATE_CHECKBOX_ID = "auto-update-checkbox";

// Switch mode button
const SWITCH_MODE_BUTTON_ID = "switch_mode_button";

// Computable Contract readonly textbox
const COMPUTABLE_CONTRACT_TEXTBOX_ID = "computable-contract-text";


// Claim Coverage indicator
const CLAIM_COVERAGE_INDICATOR_ID = "claim_coverage_indicator"

// Claim Specification field IDs
const FIELD_ELEM_SUFFIX = "-field";


    // Policy Info fields 
const POLICY_SIGNED_PREFIX = 'policy_signed';
const POLICY_SIGNED_FIELD_ID = POLICY_SIGNED_PREFIX + FIELD_ELEM_SUFFIX;

const PAID_PREMIUM_AMOUNT_PREFIX = 'paid_premium_amount';
const PAID_PREMIUM_AMOUNT_FIELD_ID = PAID_PREMIUM_AMOUNT_PREFIX + FIELD_ELEM_SUFFIX;

const WELLNESS_VISIT_CONFIRMATION_PREFIX = 'wellness_visit_confirmation_provided';
const WELLNESS_VISIT_CONFIRMATION_FIELD_ID = WELLNESS_VISIT_CONFIRMATION_PREFIX + FIELD_ELEM_SUFFIX;

const POLICY_CANCELED_PREFIX = 'policy_canceled';
const POLICY_CANCELED_FIELD_ID = POLICY_CANCELED_PREFIX + FIELD_ELEM_SUFFIX;

    // Patient Info Fields
const PATIENT_AGE_PREFIX = 'patient_age';
const PATIENT_AGE_FIELD_ID = PATIENT_AGE_PREFIX + FIELD_ELEM_SUFFIX;


    // Hospitalization Info Fields
const HOSP_REASON_PREFIX = 'hospitalization_reason';
const HOSP_REASON_FIELD_ID = HOSP_REASON_PREFIX + FIELD_ELEM_SUFFIX;

const HOSP_CAUSE_PREFIX = 'claim_cause';
const HOSP_CAUSE_FIELD_ID = HOSP_CAUSE_PREFIX + FIELD_ELEM_SUFFIX;

const HOSP_COUNTRY_PREFIX = 'hospitalization_country';
const HOSP_COUNTRY_FIELD_ID = HOSP_COUNTRY_PREFIX + FIELD_ELEM_SUFFIX;

const HOSP_START_DATE_PREFIX = 'hospitalization_start_date';
const HOSP_START_DATE_FIELD_ID = HOSP_START_DATE_PREFIX + FIELD_ELEM_SUFFIX;

const HOSP_START_TIME_PREFIX = 'hospitalization_start_time';
const HOSP_START_TIME_FIELD_ID = HOSP_START_TIME_PREFIX + FIELD_ELEM_SUFFIX;

const HOSP_END_DATE_PREFIX = 'hospitalization_end_date';
const HOSP_END_DATE_FIELD_ID = HOSP_END_DATE_PREFIX + FIELD_ELEM_SUFFIX;

const HOSP_END_TIME_PREFIX = 'hospitalization_end_time';
const HOSP_END_TIME_FIELD_ID = HOSP_END_TIME_PREFIX + FIELD_ELEM_SUFFIX;

const CLAIM_SPEC_FIELD_ID_LIST = [
    POLICY_SIGNED_FIELD_ID,
    PAID_PREMIUM_AMOUNT_FIELD_ID,
    WELLNESS_VISIT_CONFIRMATION_FIELD_ID,
    POLICY_CANCELED_FIELD_ID,

    PATIENT_AGE_FIELD_ID, 

    HOSP_REASON_FIELD_ID,
    HOSP_CAUSE_FIELD_ID,
    HOSP_COUNTRY_FIELD_ID,

    HOSP_START_DATE_FIELD_ID,
    HOSP_START_TIME_FIELD_ID,
    HOSP_END_DATE_FIELD_ID,
    HOSP_END_TIME_FIELD_ID
];

//=================================================================================
// End Element IDs
//=================================================================================

// Default claim field value
const DEFAULT_CLAIM_FIELD_VAL = "none";

let auto_update = true;

// Default contract specification
let contract_specification = {
    policy_in_effect_conditions : {
        wellness_visit: true
    },

    benefits : {
        usa_hospital : true
    },

    general_exclusions : {
        skydiving: true,
        military_service: true,
        firefighter_service: true,
        police_service: true,
        age: {
            is_constraint: true,
            amount: 75
        }

    },

    benefit_and_premium_amounts : {
        benefit_amount: 500,
        premium_amount: 2000
    }
};

// List of input modes
const INPUT_MODES = {
    CONTRACT_SPEC: 0,
    CLAIM_SPEC: 1,

    INITIAL_MODE: 0
};

// Current input mode
let current_mode = INPUT_MODES.INITIAL_MODE;


const country_list = [
    "afghanistan",
    "albania",
    "algeria",
    "andorra",
    "angola",
    "antigua",
    "argentina",
    "armenia",
    "australia",
    "austria",
    "azerbaijan",
    "bahamas",
    "bahrain",
    "bangladesh",
    "barbados",
    "belgium",
    "belize",
    "belorussia",
    "benin",
    "bhutan",
    "bolivia",
    "bosnia_herzegovina",
    "botswana",
    "brazil",
    "brunei",
    "bulgaria",
    "burkina",
    "burma",
    "burundi",
    "cambodia",
    "cameroon",
    "canada",
    "cape_verde",
    "central_africa",
    "chad",
    "chile",
    "china",
    "colombia",
    "comoros",
    "congo",
    "costa_rica",
    "croatia",
    "cuba",
    "cyprus",
    "czech_republic",
    "denmark",
    "djibouti",
    "dominica",
    "dominican_republic",
    "ecuador",
    "egypt",
    "el_salvador",
    "equatorial_guinea",
    "eritrea",
    "estonia",
    "ethiopia",
    "fiji",
    "finland",
    "france",
    "gabon",
    "gambia",
    "germany",
    "ghana",
    "greece",
    "grenada",
    "guatemala",
    "guinea",
    "guinea_bissau",
    "guyana",
    "haiti",
    "honduras",
    "hungary",
    "iceland",
    "india",
    "indonesia",
    "iran",
    "irag",
    "ireland",
    "israel",
    "italy",
    "ivory_coast",
    "jamaica",
    "japan",
    "jordan",
    "kazakhstan",
    "kenya",
    "kiribati",
    "kuwait",
    "kyrgyzstan",
    "laos",
    "latvia",
    "lebanon",
    "lesotho",
    "liberia",
    "libya",
    "liechtenstein",
    "lithuania",
    "luxembourg",
    "macedonia",
    "madagascar",
    "malawi",
    "malaysia",
    "maldives",
    "mali",
    "malta",
    "marshall_islands",
    "mauritania",
    "mauritius",
    "mexico",
    "micronesia",
    "moldova",
    "mongolia",
    "morocco",
    "mozambique",
    "namibia",
    "nepal",
    "netherlands",
    "new_zealand",
    "nicaragua",
    "niger",
    "nigeria",
    "north_korea",
    "norway",
    "oman",
    "pakistan",
    "panama",
    "papua_new_guinea",
    "paraguay",
    "peru",
    "phillipines",
    "poland",
    "portugal",
    "romania",
    "russian_federation",
    "rwanda",
    "saint_kitts",
    "saint_lucia",
    "saint_vincent",
    "san_marino",
    "sao_tome",
    "saudi_arabia",
    "senegal",
    "seychelles",
    "sierra_leone",
    "singapore",
    "slovakia",
    "slovenia",
    "solomon_islands",
    "somalia",
    "south_africa",
    "south_korea",
    "spain",
    "sri_lanka",
    "sudan",
    "surinam",
    "swaziland",
    "sweden",
    "switzerland",
    "syria",
    "taiwan",
    "tajikistan",
    "tanzania",
    "thailand",
    "togo",
    "trindad",
    "tunisia",
    "turkey",
    "turkmenistan",
    "uganda",
    "uk",
    "ukraine",
    "uae",
    "usa",
    "uruguay",
    "uzbekistan",
    "vanuatu",
    "venezuela",
    "vietnam",
    "western_samoa",
    "yemen",
    "yugoslavia",
    "zaire",
    "zambia",
    "zimbabwe"
];

function calcNumExclusions() {
    let numExclusions = 0;

    numExclusions += contract_specification.general_exclusions.skydiving ? 1 : 0;
    numExclusions += contract_specification.general_exclusions.military_service ? 1 : 0;
    numExclusions += contract_specification.general_exclusions.firefighter_service ? 1 : 0;
    numExclusions += contract_specification.general_exclusions.police_service ? 1 : 0;
    numExclusions += contract_specification.general_exclusions.age.is_constraint ? 1 : 0;

    return numExclusions;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {    
    // Set the specification options to defaults
    initSpecificationOptions();

    // Initialize the contract specification fields
    initContractSpecFields();

    // Initialize other elements to defaults
    document.getElementById(AUTO_UPDATE_CHECKBOX_ID).checked = auto_update;

    // Update the Traditional Contract
    updateTraditionalContract();
    
    // Update the Computable Contract
    updateComputableContract();
    
    
    // Create event listeners once everything is initialized
    createEventListeners();
});

function updateTraditionalContract() {
    updateTraditionalContract_Section1();

    updateTraditionalContract_Section2();

    updateTraditionalContract_Section3();

    updateTraditionalContract_Section5();
}

function updateTraditionalContract_Section1() {
    document.getElementById(WELLNESS_VISIT_CONDITION_TRAD_CONTRACT_ID).hidden = !contract_specification.policy_in_effect_conditions.wellness_visit;

    const WELLNESS_VISIT_CONDITION_REF_CLASS = WELLNESS_VISIT_CONDITION_TRAD_CONTRACT_ID + "-ref";

    // Hide elements that reference the condition
    for (widget of document.getElementsByClassName(WELLNESS_VISIT_CONDITION_REF_CLASS) ){
        widget.hidden = !contract_specification.policy_in_effect_conditions.wellness_visit;
    }
}

function updateTraditionalContract_Section2() {
    document.getElementById(USA_HOSPITAL_CONDITION_TRAD_CONTRACT_ID).hidden = !contract_specification.benefits.usa_hospital;
}

function updateTraditionalContract_Section3() {
    
    let numExclusions = calcNumExclusions();

    // Set visibility of clauses and update number of exclusions
    let skydivingExclusionWidget = document.getElementById(GENERAL_EXCLUSION_SKYDIVING_TRAD_CONTRACT_ID);
    skydivingExclusionWidget.hidden = contract_specification.general_exclusions.skydiving ? false : true;

    let militaryServiceExclusionWidget = document.getElementById(GENERAL_EXCLUSION_MILITARY_SERVICE_TRAD_CONTRACT_ID);
    militaryServiceExclusionWidget.hidden = contract_specification.general_exclusions.military_service ? false : true;

    let firefighterServiceExclusionWidget = document.getElementById(GENERAL_EXCLUSION_FIREFIGHTER_SERVICE_TRAD_CONTRACT_ID);
    firefighterServiceExclusionWidget.hidden = contract_specification.general_exclusions.firefighter_service ? false : true;

    let policeServiceExclusionWidget = document.getElementById(GENERAL_EXCLUSION_POLICE_SERVICE_TRAD_CONTRACT_ID);
    policeServiceExclusionWidget.hidden = contract_specification.general_exclusions.police_service ? false : true;

    let ageExclusionWidget = document.getElementById(GENERAL_EXCLUSION_AGE_IS_CONSTRAINT_TRAD_CONTRACT_ID);
    ageExclusionWidget.hidden = contract_specification.general_exclusions.age.is_constraint ? false : true;

    document.getElementById(GENERAL_EXCLUSION_AGE_AMOUNT_TRAD_CONTRACT_ID).textContent = contract_specification.general_exclusions.age.amount;
    
    // Update the delimiters, alph-ids, and header text based on the number of exclusions
    if (numExclusions === 0) {
        document.getElementById("exclusion-clause-header-exclusions-present").hidden = true;
        document.getElementById("exclusion-clause-header-exclusions-absent").hidden = false;
    }
    else {
        document.getElementById("exclusion-clause-header-exclusions-present").hidden = false;
        document.getElementById("exclusion-clause-header-exclusions-absent").hidden = true;

        const EXC_CLAUSE_ALPH_CLASS = "exclusion-clause-alph-id";
        const EXC_CLAUSE_DELIMITER = "exclusion-clause-delimiter";

        let currAlphId = 'a';

        if (numExclusions > 0 && contract_specification.general_exclusions.skydiving) {
            skydivingExclusionWidget.getElementsByClassName(EXC_CLAUSE_ALPH_CLASS)[0].textContent = "(" + currAlphId + ")";
            skydivingExclusionWidget.getElementsByClassName(EXC_CLAUSE_DELIMITER)[0].textContent = numExclusions > 1 ? "; or" : "." ;
            currAlphId = String.fromCharCode(currAlphId.charCodeAt(0) + 1); 
            numExclusions -= 1;
        }

        if (numExclusions > 0 && contract_specification.general_exclusions.military_service) {
            militaryServiceExclusionWidget.getElementsByClassName(EXC_CLAUSE_ALPH_CLASS)[0].textContent = "(" + currAlphId + ")";
            militaryServiceExclusionWidget.getElementsByClassName(EXC_CLAUSE_DELIMITER)[0].textContent = numExclusions > 1 ? "; or" : "." ;
            currAlphId = String.fromCharCode(currAlphId.charCodeAt(0) + 1); 
            numExclusions -= 1;
        }

        if (numExclusions > 0 && contract_specification.general_exclusions.firefighter_service) {
            firefighterServiceExclusionWidget.getElementsByClassName(EXC_CLAUSE_ALPH_CLASS)[0].textContent = "(" + currAlphId + ")";
            firefighterServiceExclusionWidget.getElementsByClassName(EXC_CLAUSE_DELIMITER)[0].textContent = numExclusions > 1 ? "; or" : "." ;
            currAlphId = String.fromCharCode(currAlphId.charCodeAt(0) + 1); 
            numExclusions -= 1;
        }

        if (numExclusions > 0 && contract_specification.general_exclusions.police_service) {
            policeServiceExclusionWidget.getElementsByClassName(EXC_CLAUSE_ALPH_CLASS)[0].textContent = "(" + currAlphId + ")";
            policeServiceExclusionWidget.getElementsByClassName(EXC_CLAUSE_DELIMITER)[0].textContent = numExclusions > 1 ? "; or" : "." ;
            currAlphId = String.fromCharCode(currAlphId.charCodeAt(0) + 1); 
            numExclusions -= 1;
        }

        if (numExclusions > 0 && contract_specification.general_exclusions.age.is_constraint) {
            ageExclusionWidget.getElementsByClassName(EXC_CLAUSE_ALPH_CLASS)[0].textContent = "(" + currAlphId + ")";
            ageExclusionWidget.getElementsByClassName(EXC_CLAUSE_DELIMITER)[0].textContent = numExclusions > 1 ? "; or" : "." ;
            currAlphId = String.fromCharCode(currAlphId.charCodeAt(0) + 1); 
            numExclusions -= 1;
        }
    }
}

function updateTraditionalContract_Section5() {
    document.getElementById(BENEFIT_AMOUNT_TRAD_CONTRACT_ID).textContent = contract_specification.benefit_and_premium_amounts.benefit_amount;
    document.getElementById(PREMIUM_AMOUNT_TRAD_CONTRACT_ID).textContent = contract_specification.benefit_and_premium_amounts.premium_amount;
}

function updateComputableContract() {

    let coveredViewDef = `covered(C, N) :- 
    claim.policy(C, P) & 
    policy.in_effect(P) & 
    claim.hospitalization(C, H) & 
    hospitalization_conditions_met(H) & 
    benefit_calc(C, N)`;

    // Customize based on Section 1
    let policyInEffectViewDef = `
policy.in_effect(P) :- 
    policy.signed(P) & 
    policy.paid_premium(P) & `;

    let section1_3ViewDef = "";
    if (contract_specification.policy_in_effect_conditions.wellness_visit) {
        policyInEffectViewDef += `
    condition_met_1.3(P) & 
    ~policy.canceled(P)`;

        section1_3ViewDef += "\n\ncondition_met_1.3(P) :- policy.wellness_visit_confirmation_provided(P)";
    } 
    else {
        policyInEffectViewDef += `\n    ~policy.canceled(P)`;
    }

    // Customize based on Section 3
    let numExclusions = calcNumExclusions();

    let exclusionViewDef = ``;
    if (numExclusions > 0) {
        coveredViewDef += ` & \n    ~exclusion_applies(C)`;

        exclusionViewDef += '\n';


        // Assemble the exclusion definitions
        if (contract_specification.general_exclusions.skydiving) {
            exclusionViewDef += `
exclusion_applies(C) :- \n    claim.hospitalization(C, H) & \n    hospitalization.causal_event(H, skydiving)`;
        }
        if (contract_specification.general_exclusions.military_service) {
            exclusionViewDef += `
exclusion_applies(C) :- \n    claim.hospitalization(C, H) & \n    hospitalization.causal_event(H, military_service)`;
        }
        if (contract_specification.general_exclusions.firefighter_service) {
            exclusionViewDef += `
exclusion_applies(C) :- \n    claim.hospitalization(C, H) & \n    hospitalization.causal_event(H, firefighting_service)`;
        }
        if (contract_specification.general_exclusions.police_service) {
            exclusionViewDef += `
exclusion_applies(C) :- \n    claim.hospitalization(C, H) & \n    hospitalization.causal_event(H, police_service)`;
        }
        if (contract_specification.general_exclusions.age.is_constraint) {
            exclusionViewDef += `
exclusion_applies(C) :- \n    claim.hospitalization(C, H) & \n    hospitalization.patient(H, X) & \n    person.age(X, A) & \n    geq(A, ` + contract_specification.general_exclusions.age.amount.toString() + `)`;
        }
    }

    let hospConditionsMetViewDef = `
hospitalization_conditions_met(H) :- hospitalization_valid_reason(H)`;

    
    if (contract_specification.benefits.usa_hospital) {
        hospConditionsMetViewDef += ` & hospitalization.country(H, usa)`;
    }

    hospConditionsMetViewDef += `

hospitalization_valid_reason(H) :- hospitalization.reason(H, sickness)
hospitalization_valid_reason(H) :- hospitalization.reason(H, accidental_injury)`;

    // Customize based on Section 5

    let benefitCalcViewDef = "benefit_calc(C,N) :- \n    claim.hospitalization(C, H) & \n    duration_days(H, D) & \n    evaluate(max(0,times(D, " + contract_specification.benefit_and_premium_amounts.benefit_amount + ")), N)"

    let paidPremiumViewDef = `policy.paid_premium(P) :- 
    policy.premium_amount_paid(P, A) &
    geq(A, `+ contract_specification.benefit_and_premium_amounts.premium_amount.toString() +`)`;

    // Functions in the footer

    let footerViewDefs = `duration_days(H, D) :- \n    duration(H, D_MS) & \n    evaluate(floor(quotient(D_MS, 86400000)), D)

duration(Z,DURATION) :-
    hospitalization.startdate(Z,SD) &
    hospitalization.starttime(Z,ST) &
    hospitalization.enddate(Z,ED) &
    hospitalization.endtime(Z,ET) &
    datetimetotimestamp(SD,ST,SS) &
    datetimetotimestamp(ED,ET,ES) &
    evaluate(minus(ES,SS),DURATION)

geq(X, Y) :- evaluate(min(X,Y), Y)
`;



    // Assemble sections in sensible order

    let accumulationString = "\n";
    accumulationString += coveredViewDef;
    accumulationString += "\n";
    accumulationString += policyInEffectViewDef;
    accumulationString += section1_3ViewDef;
    accumulationString += "\n\n";
    accumulationString += paidPremiumViewDef;

    accumulationString += "\n";
    accumulationString += hospConditionsMetViewDef;


    accumulationString += exclusionViewDef;
    accumulationString += "\n\n";
    
    accumulationString += benefitCalcViewDef;
    accumulationString += "\n\n";

    accumulationString += footerViewDefs;

    document.getElementById(COMPUTABLE_CONTRACT_TEXTBOX_ID).value = accumulationString;
}

function evalAndUpdateClaimCoverage() {
    // Build the dataset from the field vals
    //let claim_spec_dataset = [];
    claim_spec_dataset = [];
    definemorefacts(claim_spec_dataset, readdata('claim.policy(claim1,policy1)'));
    definemorefacts(claim_spec_dataset, readdata('claim.hospitalization(claim1,hosp1)'));
    definemorefacts(claim_spec_dataset, readdata('hospitalization.patient(hosp1, person1)'));

    // Get the widgets
    let policySignedWidget = document.getElementById(POLICY_SIGNED_FIELD_ID);
    if (policySignedWidget.checked) {
        definemorefacts(claim_spec_dataset, readdata("policy.signed(policy1)"));
    }

    let paidPremiumAmountWidget = document.getElementById( PAID_PREMIUM_AMOUNT_FIELD_ID);
    definemorefacts(claim_spec_dataset, readdata("policy.premium_amount_paid(policy1," + Number(paidPremiumAmountWidget.value) + ")"));
    
    let wellnessVisitConfirmationWidget = document.getElementById( WELLNESS_VISIT_CONFIRMATION_FIELD_ID);
    if (wellnessVisitConfirmationWidget.checked) {
        definemorefacts(claim_spec_dataset, readdata("policy.wellness_visit_confirmation_provided(policy1)"));
    }

    let policyCanceledWidget = document.getElementById( POLICY_CANCELED_FIELD_ID);
    if (policyCanceledWidget.checked) {
        definemorefacts(claim_spec_dataset, readdata("policy.canceled(policy1)"));
    }

    let patientAgeWidget = document.getElementById( PATIENT_AGE_FIELD_ID);
    definemorefacts(claim_spec_dataset, readdata("person.age(person1," + Number(patientAgeWidget.value) + ")"));

    let hospReasonWidget = document.getElementById( HOSP_REASON_FIELD_ID);
    if (hospReasonWidget.value !== DEFAULT_CLAIM_FIELD_VAL) {
        definemorefacts(claim_spec_dataset, readdata("hospitalization.reason(hosp1," + hospReasonWidget.value + ")"));
    }

    let hospCauseWidget = document.getElementById( HOSP_CAUSE_FIELD_ID);
    if (hospCauseWidget.value !== DEFAULT_CLAIM_FIELD_VAL) {
        definemorefacts(claim_spec_dataset, readdata("hospitalization.causal_event(hosp1," + hospCauseWidget.value + ")"));
    }

    let hospCountryWidget = document.getElementById( HOSP_COUNTRY_FIELD_ID);
    if (hospCountryWidget.value !== DEFAULT_CLAIM_FIELD_VAL) {
        definemorefacts(claim_spec_dataset, readdata("hospitalization.country(hosp1," + hospCountryWidget.value + ")"));
    }

    // Perform datetimetotimestamp manually
    let hospStartDateWidget = document.getElementById( HOSP_START_DATE_FIELD_ID);
    let hospStartTimeWidget = document.getElementById( HOSP_START_TIME_FIELD_ID);

    if (hospStartDateWidget.value !== "" && hospStartTimeWidget.value !== "") {
        let formattedDate = hospStartDateWidget.value.replace(/-/g, '_');
        let formattedTime = hospStartTimeWidget.value.replace(/:/g, '_') + "_00"

        definemorefacts(claim_spec_dataset, readdata("hospitalization.startdate(hosp1," + formattedDate + ")"));
        definemorefacts(claim_spec_dataset, readdata("hospitalization.starttime(hosp1," + formattedTime + ")"));

        let splitDate = formattedDate.split("_");
        let splitTime = formattedTime.split("_");

        let timeStamp = maketimestamp(splitDate[0], splitDate[1], splitDate[2], splitTime[0], splitTime[1], splitTime[2]);

        definemorefacts(claim_spec_dataset, readdata("datetimetotimestamp(" + formattedDate + "," + formattedTime + "," + timeStamp + ")"))
    }

    let hospEndDateWidget = document.getElementById( HOSP_END_DATE_FIELD_ID);
    let hospEndTimeWidget = document.getElementById( HOSP_END_TIME_FIELD_ID);
    if (hospEndDateWidget.value !== "" && hospEndTimeWidget.value !== "") {
        let formattedDate = hospEndDateWidget.value.replace(/-/g, '_');
        let formattedTime = hospEndTimeWidget.value.replace(/:/g, '_') + "_00"

        definemorefacts(claim_spec_dataset, readdata("hospitalization.enddate(hosp1," + formattedDate + ")"));
        definemorefacts(claim_spec_dataset, readdata("hospitalization.endtime(hosp1," + formattedTime + ")"));

        let splitDate = formattedDate.split("_");
        let splitTime = formattedTime.split("_");

        let timeStamp = maketimestamp(splitDate[0], splitDate[1], splitDate[2], splitTime[0], splitTime[1], splitTime[2]);

        definemorefacts(claim_spec_dataset, readdata("datetimetotimestamp(" + formattedDate + "," + formattedTime + "," + timeStamp + ")"))
    }

    // Eval the logic program on the dataset
    let ruleset = definemorerules([], readdata(document.getElementById(COMPUTABLE_CONTRACT_TEXTBOX_ID).value));

    let coverage = compfinds('N', read('covered(C, N)'), claim_spec_dataset, ruleset);

    // Update the coverage indicator accordingly

    let coverageIndicatorWidget = document.getElementById(CLAIM_COVERAGE_INDICATOR_ID);
    if (coverage.length == 0) {
        coverageIndicatorWidget.textContent = "Not Covered";
        coverageIndicatorWidget.style.color = "red";
    } else {
        coverageIndicatorWidget.textContent = "Covered for $" + coverage[0] ;
        coverageIndicatorWidget.style.color = "green";
    }
}

function createEventListeners() {
    // Section 1
    document.getElementById(WELLNESS_VISIT_CONDITION_OPTION_ID).addEventListener("change", (event) => handleSpecificationOptionChange(event, WELLNESS_VISIT_CONDITION_OPTION_ID));
    
    // Section 2
    document.getElementById(USA_HOSPITAL_CONDITION_OPTION_ID).addEventListener("change", (event) => handleSpecificationOptionChange(event, USA_HOSPITAL_CONDITION_OPTION_ID));

    // Section 3
    document.getElementById(GENERAL_EXCLUSION_SKYDIVING_OPTION_ID).addEventListener("change", (event) => handleSpecificationOptionChange(event, GENERAL_EXCLUSION_SKYDIVING_OPTION_ID));
    document.getElementById(GENERAL_EXCLUSION_MILITARY_SERVICE_OPTION_ID).addEventListener("change", (event) => handleSpecificationOptionChange(event, GENERAL_EXCLUSION_MILITARY_SERVICE_OPTION_ID));
    document.getElementById(GENERAL_EXCLUSION_FIREFIGHTER_SERVICE_OPTION_ID).addEventListener("change", (event) => handleSpecificationOptionChange(event, GENERAL_EXCLUSION_FIREFIGHTER_SERVICE_OPTION_ID));
    document.getElementById(GENERAL_EXCLUSION_POLICE_SERVICE_OPTION_ID).addEventListener("change", (event) => handleSpecificationOptionChange(event, GENERAL_EXCLUSION_POLICE_SERVICE_OPTION_ID));
    
    document.getElementById(GENERAL_EXCLUSION_AGE_IS_CONSTRAINT_OPTION_ID).addEventListener("change", (event) => handleSpecificationOptionChange(event, GENERAL_EXCLUSION_AGE_IS_CONSTRAINT_OPTION_ID));
    document.getElementById(GENERAL_EXCLUSION_AGE_AMOUNT_OPTION_ID).addEventListener("change", (event) => handleSpecificationOptionChange(event, GENERAL_EXCLUSION_AGE_AMOUNT_OPTION_ID));
    
    // Section 5
    document.getElementById(BENEFIT_AMOUNT_OPTION_ID).addEventListener("change", (event) => handleSpecificationOptionChange(event, BENEFIT_AMOUNT_OPTION_ID));
    document.getElementById(PREMIUM_AMOUNT_OPTION_ID).addEventListener("change", (event) => handleSpecificationOptionChange(event, PREMIUM_AMOUNT_OPTION_ID));

    // Add event listeners for button and checkbox for updating contracts 
    document.getElementById(UPDATE_BUTTON_ID).addEventListener("click", (event) => {updateTraditionalContract(); updateComputableContract();});

    document.getElementById(AUTO_UPDATE_CHECKBOX_ID).addEventListener("change", (event) => {
        if (event.target.checked) {
            auto_update = true;
            updateTraditionalContract(); 
            updateComputableContract();
        }
        else {
            auto_update = false;
        }
        
    });

    // Add event listener for mode switching button
    document.getElementById(SWITCH_MODE_BUTTON_ID).addEventListener("click", (event) => {
        let button = document.getElementById(SWITCH_MODE_BUTTON_ID);
        let contract_spec_column = document.getElementById("contract-specification-container");
        let claim_spec_column = document.getElementById("claim-specification-container");

        switch (current_mode) {
            // Switch to specifying claims
            case INPUT_MODES.CONTRACT_SPEC:
                button.value = "Switch to Contract Spec"
                current_mode = INPUT_MODES.CLAIM_SPEC;

                contract_spec_column.hidden = true;
                claim_spec_column.hidden = false;

                // Update claim coverage indicator
                evalAndUpdateClaimCoverage();
                break;

            // Switch to specifying contracts
            case INPUT_MODES.CLAIM_SPEC:
                button.value = "Switch to Claims Analysis"
                current_mode = INPUT_MODES.CONTRACT_SPEC;

                contract_spec_column.hidden = false;
                claim_spec_column.hidden = true;
                break;

            default:
                console.log("Current mode is not a valid input mode: " + current_mode);

        }
    });

    
    // Event listeners for the claim specification fields
    for (const CLAIM_SPEC_FIELD_ID of CLAIM_SPEC_FIELD_ID_LIST) {
        document.getElementById(CLAIM_SPEC_FIELD_ID).addEventListener("change", (event)=>evalAndUpdateClaimCoverage());
    }
}

//==============================================================================
// Event handlers
//==============================================================================

function initSpecificationOptions() {
    // Section 1
    document.getElementById(WELLNESS_VISIT_CONDITION_OPTION_ID).checked = contract_specification.policy_in_effect_conditions.wellness_visit;

    // Section 2
    document.getElementById(USA_HOSPITAL_CONDITION_OPTION_ID).checked = contract_specification.benefits.usa_hospital;

    // Section 3
    document.getElementById(GENERAL_EXCLUSION_SKYDIVING_OPTION_ID).checked = contract_specification.general_exclusions.skydiving;
    document.getElementById(GENERAL_EXCLUSION_MILITARY_SERVICE_OPTION_ID).checked = contract_specification.general_exclusions.military_service;
    document.getElementById(GENERAL_EXCLUSION_FIREFIGHTER_SERVICE_OPTION_ID).checked = contract_specification.general_exclusions.firefighter_service;
    document.getElementById(GENERAL_EXCLUSION_POLICE_SERVICE_OPTION_ID).checked = contract_specification.general_exclusions.police_service;

    document.getElementById(GENERAL_EXCLUSION_AGE_IS_CONSTRAINT_OPTION_ID).checked = contract_specification.general_exclusions.age.is_constraint;
    document.getElementById(GENERAL_EXCLUSION_AGE_AMOUNT_OPTION_ID).value = contract_specification.general_exclusions.age.amount;

    // Section 5
    document.getElementById(BENEFIT_AMOUNT_OPTION_ID).value = contract_specification.benefit_and_premium_amounts.benefit_amount;
    document.getElementById(PREMIUM_AMOUNT_OPTION_ID).value = contract_specification.benefit_and_premium_amounts.premium_amount;
}

function initContractSpecFields() {
    let hospitalizationCountryDropdown = document.getElementById(HOSP_COUNTRY_FIELD_ID);

    for (const countryName of country_list ) {
        let countryOption = document.createElement("option");
        countryOption.text = countryName;
        hospitalizationCountryDropdown.add(countryOption);
    }
}

function handleSpecificationOptionChange(event, optionWidgetId) {
    let optionWidget = document.getElementById(optionWidgetId);

    // Update the model of the specification options
    switch (optionWidgetId) {
        // Section 1
        case WELLNESS_VISIT_CONDITION_OPTION_ID:
            contract_specification.policy_in_effect_conditions.wellness_visit = optionWidget.checked;
            break;

        // Section 2
        case USA_HOSPITAL_CONDITION_OPTION_ID:
            contract_specification.benefits.usa_hospital = optionWidget.checked;
            break;

        // Section 3
        case GENERAL_EXCLUSION_SKYDIVING_OPTION_ID:
            contract_specification.general_exclusions.skydiving = optionWidget.checked;
            break;
        case GENERAL_EXCLUSION_MILITARY_SERVICE_OPTION_ID:
            contract_specification.general_exclusions.military_service = optionWidget.checked;
            break;
        case GENERAL_EXCLUSION_FIREFIGHTER_SERVICE_OPTION_ID:
            contract_specification.general_exclusions.firefighter_service = optionWidget.checked;
            break;
        case GENERAL_EXCLUSION_POLICE_SERVICE_OPTION_ID:
            contract_specification.general_exclusions.police_service = optionWidget.checked;
            break;

        case GENERAL_EXCLUSION_AGE_IS_CONSTRAINT_OPTION_ID:
            contract_specification.general_exclusions.age.is_constraint = optionWidget.checked;
            break;
        case GENERAL_EXCLUSION_AGE_AMOUNT_OPTION_ID:
            contract_specification.general_exclusions.age.amount = Number(optionWidget.value);
            break;

        // Section 5
        case BENEFIT_AMOUNT_OPTION_ID:
            contract_specification.benefit_and_premium_amounts.benefit_amount = Number(optionWidget.value);
            break;
        case PREMIUM_AMOUNT_OPTION_ID:
            contract_specification.benefit_and_premium_amounts.premium_amount = Number(optionWidget.value);
            break;
        
    }

    if (auto_update) {
        updateTraditionalContract();
        updateComputableContract();
    }

}