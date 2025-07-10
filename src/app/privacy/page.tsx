import { Metadata } from 'next';
import Title from '@/components/Layout/Title';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { METADATA } from '@/data/content';

// Variables
const { PRIVACY } = METADATA.TITLE;
const { LABEL, DESCRIPTION } = PRIVACY;

// Metadata
export const metadata: Metadata = {
  title: LABEL,
  description: DESCRIPTION,
};

export default function Privacy(): React.ReactNode {
  return (
    // Privacy Start
    <section className="privacy bg-primary flex-1">
      <Title
        keyword={'Personal data processing information'}
        content={'Last update: 07/10/2025'}
      />
      <AnimationTypedArticle
        content={[
          'Perosnal data processing information',
          'Last update: 07/10/2025',
        ]}
      />
      <AnimationTypedArticle
        content={[
          `The ownership of the processing is entrusted to Luca Cattide who, pursuant to Art. 13 of the Italian Legislative Decree 196/2003 - Privacy Code, informs you that the data provided by you and which concerns you (including name, surname, date of birth, e-mail, password, legal address, tax code, telephone number, acceptance of privacy terms and conditions and liability limitation, payment methods details, transaction history, feedback, personal profiles, Internet Protocol - IP address, browser type and language, response time of web pages and their interaction, duration of visits per web page and so on) - collected through the website (through registration, economic transactions, communications, subscription to information and/or promotional services and so on) or any other form - are collected, archived, and used for the execution of the contractual relationship that binds you, as well as for the provision of services directly instrumental to said relationship, as well as technical-administrative operations inherent to the infrastructure and the channels interconnected to it (including technical assistance on critical issues related to the online platform, generic and/or promotional communications personalized and non-personalized - relating to the services offered, analysis of statistical data of a sensitive and non-sensitive nature - for the provision and improvement of proprietary and/or third-party services, compliance with any applicable law or regulation).<br />The data will be processed by electronic and paper means, according to methods strictly instrumental to the pursuit of the indicated purpose, as well as by the indications expressed in the Italian Legislative Decree 679/16 - GDPR. The provision of your data is necessary for the execution of the existing contractual relationship with you.<br />The information concerning you may be used by employees, consultants and/or individuals and entities, etc. - other than the data controller - designated data processors, or by third parties who hold the role of external managers, for carrying out operations connected to the aforementioned purpose (including communications and notifications relating to the user account of the platform of a technical and/or or professional, dispute resolutions, collection of monetary quotas, surveys and questionnaires, updates relating to the represented activity, applicability of terms and conditions and/or liability limitation, applicable national laws and any existing agreements, carried out through electronic/digital channels – email, telephone, text messages – and/or traditional – regular mail).<br />The digital services provided are hosted on the TODO: Server platform. TODO: Server is responsible for providing the online resource that allows the sale of the same and all related essential and/or auxiliary operations.<br />Except as indicated above, and for what follows in the paragraph General Data Protection Regulation, the communication of your data to third parties may be carried out exclusively for the fulfillment of legal obligations or for accounting purposes, as well as to give effect to the existing contractual relationship. Except for the indications contained in the aforementioned paragraph, your data will not be disclosed. The updated list of managers and persons in charge is available at the headquarters of the data controller and can be consulted with a request to be made via e-mail to the address lucacattide[at]pm[dot]me or via any channel indicated in the paragraph "General Data Protection Regulation".<br />To have full clarity on the operations we have reported to you about and to exercise the rights of access, rectification, opposition to processing and the other rights referred to in the Art. 7 of the Italian Legislative Decree 196/2003 (Consolidated Law - Privacy Code) you can contact the person responsible for managing the requests of interested parties with a letter to be sent via e-mail to the above address or as indicated in the paragraph "General Data Protection Regulation".<br />lucati.de, using cookies technology for further information and promotional purposes, presents the list of third-party advertising features involved on its <a href="/cookies" title="UE E-Privacy Directive - Code and report" tabindex="10" rel="nofollow"><strong>Cookies page (see)</strong></a>. The data - of a non-sensitive nature - which exclusively reflects the interaction and browsing experience of the user in relation to the website in question - as indicated - are subjected to processing according to the current rules and provisions dictated by the aforementioned information. This is in order to determine the volume and quality of traffic generated by the activity of viewing and consulting the contents relating to lucati.de, in compliance with what is described by the <a href="https://tinyurl.com/lal99wg" title="Google API clauses and external platforms" tabindex="11" rel="nofollow" target="_blank"><strong>Google directives (see)</strong></a>.<br />The data controller also declares that it does not acquire, without explicit consent, personal information for the purpose of integrating it with impersonal data collected through a third-party product or advertising function.<br />Browsing on lucati.de means accepting the conditions established by the European legislation on cookies and therefore considers the user's consent approved, upon explicit consent by the same through the appropriate selection interface - called Cookie Banner - present and exposed according to the GDPR criteria and guidelines, from the first access to the resource. It is possible to deactivate these data collection technologies through the settings contained in the Cookie Banner and/or of your navigation software (both in desktop and mobile versions), through the settings on Google ads and/or third parties - in addition to the indications present in the relevant section - or any other means available, in line with the deactivation functionality for consumers provided for by the NAI regulations.<br />Luca Cattide reserves the right to modify this information about the personal data processing at any time. Please therefore consult it frequently.<br />Changes and clarifications will take effect immediately upon their publication on the website. If material changes are made to this information, these will be notified in the content of the same, in order to make known the methods of collection and use of the data, as well as under what circumstances - if any - they are disclosed.`,
        ]}
        html={true}
        speed={5}
        delay={3500}
      />
      <AnimationTypedArticle
        content={[
          'General Data Protection Regulation',
          `The data controller Luca Cattide, pursuant to the Italian Legislative Decree 679/2016 – European regulation on the protection of personal data, informs you about the possession of data concerning you. These will be archived in paper and electronic format, for the entire duration of the relationship and/or unless otherwise indicated by the provisions of the existing contractual documentation - including the use of the services relating to the website. In their digital version, their protection will be guaranteed by means of encryption and anonymization procedures of the identified subjects, by the third-party bodies responsible for the supply and management of the online resource. As well as systems suitable for preventive protection from cyber attacks of different nature - such as hacking, cracking, viruses, malwares, various and possible. In the event of a data breach, an official report will be made to the competent authorities in the matter, of which you will receive notification no later than 72 hours after verification by the data controller.<br />Your data will be indirectly transmitted to third-party owners of the tools and technologies present on zenosatyarthi.com. These guarantee the correct functioning of the platform, as well as its usability by users. The list of subjects involved, as well as the methods for sending data to them, are indicated on the Cookies page. The data controller, in compliance with the aforementioned regulation and the Italian Legislative Decree 196/03 - Privacy Code, guarantees your right of access, rectification, and opposition to the processing of the data collected, subject to verification of ownership by the applicant through a request addressed to the data controller. This request must be supported by a valid identity document, to be presented independently through the appropriate services provided by the platform - if permitted - or according to the methods expressed in the Personal Data Processing Information paragraph. In case of communication of data by subjects under the age of 16, the data controller will oppose the processing and/or archiving of these - in any form - excluding the data controller and any natural and legal person attached to it correlated, by any obligation and responsibility towards the subjects involved, if the transmission of the aforementioned does not take place in the presence of certified consent from a legal tutor. For any other question on the subject, as well as points relating to the legislation, we refer you to <a href="https://tinyurl.com/y9z38rnb" title="Regulatory examination on the information defence" tabindex="12" rel="nofollow" target="_blank"><strong>consult the full text</strong></a>.`,
        ]}
        html={true}
        speed={5}
        delay={76500}
      />
      <Menu delay={107500} />
      <Terminal delay={110500} />
    </section>
    // Privacy End
  );
}
