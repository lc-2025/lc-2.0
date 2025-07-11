import { Metadata } from 'next';
import Title from '@/components/Layout/Title';
import AnimationTypedArticle from '@/components/Animation/AnimationTypedArticle';
import Menu from '@/components/Navigation/Menu';
import Terminal from '@/components/Terminal/Terminal';
import { METADATA } from '@/data/content';

// Variables
const { COOKIES } = METADATA.TITLE;
const { LABEL, DESCRIPTION } = COOKIES;

// Metadata
export const metadata: Metadata = {
  title: LABEL,
  description: DESCRIPTION,
};

/**
 * @description Cookies page
 * @author Luca Cattide
 * @date 10/07/2025
 * @export
 * @returns {*}  {React.ReactNode}
 */
export default function Cookies(): React.ReactNode {
  return (
    // Cookies Start
    <section className="cookies bg-primary flex-1">
      <Title
        keyword={'EU e-Privacy Directive <ↄ Code and information'}
        content={'Last update: 07/10/2025'}
      />
      <AnimationTypedArticle
        content={[
          'EU e-Privacy Directive <) Code and information',
          'Last update: 07/10/2025',
        ]}
        delay={500}
      />
      <AnimationTypedArticle
        content={[
          `This application uses cookies and/or anonymous identifiers to manage various functions, including:<br />Technical identifiers – aimed at the functional coordination of the system<br />TODO: Server<br />Navigation<br />Information: selective advertising of technical and legal bulletins - Cookies;<br />Third party platforms - owned by parties external to the ownership of the site<br />Application Programming Interfaces (APIs): communication platforms between the system and external resources<br />Traffic data collection<br />Google Analytics*: anonymous collection (including Internet Protocol - IP address, response time of web pages and their interaction, duration of visits per web page and so on) intended for the analysis and publication of contents, for understanding the performance of the site;<br />Social Networks<br />LinkedIn*: link to the professional profile published on the platform;<br/>GitHub*: link to the professional repository published on the platform;<br />Cookies complete list by:<br /><a href="https://tinyurl.com/594t57x7" title="Google <ↄ Cookie Policy" tabindex="10" target="_blank" rel="nofollow"><strong>Google (see)</strong></a><br /><a href="https://tinyurl.com/2tjtvhxt" title="LinkedIn <ↄ Cookie Policy" tabindex="11" target="_blank" rel="nofollow"><strong>LinkedIn (see)</strong></a><br /><a href="https://tinyurl.com/3s8uuwkp" title="GitHub <ↄ Cookie Policy" tabindex="12" target="_blank" rel="nofollow"><strong>GitHub (see)</strong></a><br />By using the website and providing explicit consent, you accept the fact that this type of cookies can be loaded on your device.<br />For information, please <a href="https://tinyurl.com/qayqqhk" title="Cookies and technology <ↄ Community regulation" tabindex="13" target="_blank" rel="nofollow"><strong>consult the European Directive</strong></a>. Alternatively, we refer you to the <a href="https://youronlinechoices.com" title="Personal and marketing area in Internet environment" tabindex="14" target="_blank" rel="nofollow"><strong>international guide (see)</strong></a> to learn more about the technical aspects of the tools in use. Further details on the methods of collection and use of data are contained in the information on the <a href="/privacy" title="Processing of personal data Policy <ↄ Luca Cattide" tabindex="15" rel="noindex nofollow"><strong>Privacy page (see)</strong>.<br />* If you wish to prevent the use of your data for advertising purposes, please <a href="https://tinyurl.com/lr9zzeb" title="Goolge Analytics deactivation plugin" tabindex="16" target="_blank" rel="nofollow"><strong>download the browser add-on</strong></a> to deactivate the third-party systems involved. Or visit the <a href="https://www.aboutads.info" title="Interest-based advertising <ↄ View blocking" tabindex="17" target="_blank" rel="nofollow"><strong>Digital Advertising Alliance website</strong></a> for specific instructions.`,
        ]}
        html={true}
        speed={10}
        delay={4700}
      />
      <Menu delay={34700} />
      <Terminal delay={37500} />
    </section>
    // Cookies End
  );
}
