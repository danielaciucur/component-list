export interface MedicalComponent {
    id: number;
    name: string;
    code: string;
    description: string;
}

export const MEDICAL_COMPONENTS: MedicalComponent[] = [
    {
        id: 1,
        name: "Headache",
        code: "f9dm4nf",
        description: "Headache is the symptom of pain in the face, head, or neck. It can occur as a migraine, tension-type headache, or cluster headache. Treatment of a headache depends on the underlying cause, but commonly involves pain medication (especially in case of migraine or cluster headache). A headache is one of the most commonly experienced of all physical discomforts."
    },
    {
        id: 2,
        name: "Paresthesia",
        code: "bd4fewsf",
        description: "Paresthesia is an abnormal sensation of the skin (tingling, pricking, chilling, burning, numbness) with no apparent physical cause.Paresthesia may be transient or chronic, and may have any of dozens of possible underlying causes. Paresthesias are usually painless and can occur anywhere on the body, but most commonly occur in the arms and legs."
    },
    {
        id: 3,
        name: "Fatigue",
        code: "fgd75dff",
        description: "Fatigue describes a state of tiredness or exhaustion. In general usage, fatigue often follows prolonged physical or mental activity. When fatigue occurs independently of physical or mental exertion, or does not resolve after rest or sleep, it may have other causes, such as a medical condition. Fatigue (in a medical context) often has no known cause, and is recognised as being complex in nature. Fatigue may be associated with conditions of chronic pain such as fibromyalgia, and with many other conditions, including autoimmune diseases. It can also be associated with mental disorders such as depression.Fatigue (in the general usage sense of normal tiredness) can include both physical and mental fatigue. Physical fatigue results from muscle fatigue brought about by intense physical activity.[5][6][7] Mental fatigue results from prolonged periods of cognitive activity which impairs cognitive ability. Mental fatigue can manifest as sleepiness, lethargy, or directed attention fatigue.Mental fatigue can also impair physical performance."
    },
    {
        id: 4,
        name: "Dizziness",
        code: "355duf3r",
        description: "Dizziness is an imprecise term that can refer to a sense of disorientation in space, vertigo, or lightheadedness. It can also refer to disequilibrium or a non-specific feeling, such as giddiness or foolishness. Dizziness is a common medical complaint, affecting 20-30% of persons. Dizziness is broken down into 4 main subtypes: vertigo (~25-50%), disequilibrium (less than ~15%), presyncope (less than ~15%), and nonspecific dizziness (~10%)."
    },
    {
        id: 5,
        name: "Tinnitus",
        code: "3r45dd33",
        description: "Tinnitus is the perception of sound when no corresponding external sound is present. Nearly everyone experiences a faint 'normal tinnitus' in a completely quiet room; but it is of concern only if it is bothersome, interferes with normal hearing, or is associated with other problems. While often described as a ringing, it may also sound like a clicking, buzzing, hissing or roaring. It may be soft or loud, low- or high-pitched, and may seem to come from one or both ears or from the head itself. In some people, it may interfere with concentration, and in some cases is associated with anxiety and depression."
    },
    {
        id: 6,
        name: "Insomnia",
        code: "fwe54q66",
        description: "Insomnia, also known as sleeplessness, is a sleep disorder in which people have trouble sleeping. They may have difficulty falling asleep, or staying asleep as long as desired. Insomnia is typically followed by daytime sleepiness, low energy, irritability, and a depressed mood. It may result in an increased risk of motor vehicle collisions, as well as problems focusing and learning. Insomnia can be short term, lasting for days or weeks, or long term, lasting more than a month. The concept of the word insomnia has two possibilities: insomnia disorder and insomnia symptoms, and many abstracts of randomized controlled trials and systematic reviews often under report on which of these two possibilities the word insomnia refers to."
    },
    {
        id: 7,
        name: "Depression",
        code: "dfg46frr",
        description: "Depression is a mental state of low mood and aversion to activity. It affects more than 280 million people of all ages (about 3.5% of the global population). Classified medically as a mental and behavioral disorder, the experience of depression affects a person's thoughts, behavior, motivation, feelings, and sense of well-being. The core symptom of depression is said to be anhedonia, which refers to loss of interest or a loss of feeling of pleasure in certain activities that usually bring joy to people. Depressed mood is a symptom of some mood disorders such as major depressive disorder and dysthymia; it is a normal temporary reaction to life events, such as the loss of a loved one; and it is also a symptom of some physical diseases and a side effect of some drugs and medical treatments. It may feature sadness, difficulty in thinking and concentration and a significant increase or decrease in appetite and time spent sleeping. People experiencing depression may have feelings of dejection, hopelessness and suicidal thoughts. It can either be short term or long term."
    },
    {
        id: 8,
        name: "Cough",
        code: "98tde444",
        description: "A cough is a sudden expulsion of air through the large breathing passages that can help clear them of fluids, irritants, foreign particles and microbes. As a protective reflex, coughing can be repetitive with the cough reflex following three phases: an inhalation, a forced exhalation against a closed glottis, and a violent release of air from the lungs following opening of the glottis, usually accompanied by a distinctive sound."
    },
    {
        id: 9,
        name: "Sore throat",
        code: "sed2358d",
        description: "Sore throat, also known as throat pain, is pain or irritation of the throat. Usually, causes of sore throat include viral infections, group A streptococcal infection (GAS) bacterial infection, pharyngitis (inflammation of the throat), tonsillitis (inflammation of the tonsils), or dehydration, which leads to the throat drying up. The majority of sore throats are caused by a virus, for which antibiotics are not helpful. A strong association between antibiotic misuse and antibiotic resistance has been shown. Symptoms of sore throat include: a scratchy sensation ,pain during swallowing, discomfort while speaking, a burning sensation, swelling in the neck"
    },
    {
        id: 10,
        name: "Chest pain",
        code: "244fged",
        description: "Chest pain is pain or discomfort in the chest, typically the front of the chest. It may be described as sharp, dull, pressure, heaviness or squeezing. Associated symptoms may include pain in the shoulder, arm, upper abdomen, or jaw, along with nausea, sweating, or shortness of breath. It can be divided into heart-related and non-heart-related pain. Pain due to insufficient blood flow to the heart is also called angina pectoris. Those with diabetes or the elderly may have less clear symptoms."
    },
    {
        id: 11,
        name: "Toothache",
        code: "8iyyj99",
        description: "Toothache, also known as dental pain, is pain in the teeth or their supporting structures, caused by dental diseases or pain referred to the teeth by non-dental diseases. When severe it may impact sleep, eating, and other daily activities. Common causes include inflammation of the pulp, (usually in response to tooth decay, dental trauma, or other factors), dentin hypersensitivity, apical periodontitis (inflammation of the periodontal ligament and alveolar bone around the root apex), dental abscesses (localized collections of pus), alveolar osteitis ('dry socket', a possible complication of tooth extraction), acute necrotizing ulcerative gingivitis (a gum infection), and temporomandibular disorder."
    },
    {
        id: 12,
        name: "Abdominal pain",
        code: "2sfr566",
        description: "Abdominal pain, also known as a stomach ache, is a symptom associated with both non-serious and serious medical issues. Common causes of pain in the abdomen include gastroenteritis and irritable bowel syndrome. About 15% of people have a more serious underlying condition such as appendicitis, leaking or ruptured abdominal aortic aneurysm, diverticulitis, or ectopic pregnancy. In a third of cases the exact cause is unclear. Given that a variety of diseases can cause some form of abdominal pain, a systematic approach to the examination of a person and the formulation of a differential diagnosis remains important."
    }
]
    