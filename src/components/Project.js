import { GoMarkGithub } from 'react-icons/go';
import { ExternalLink } from 'react-external-link';

export default function Project({ websites }) {
    return(
        <div className='project-container'>
            {websites.map( (website) => (
                <ExternalLink key={website.name} href={website.deployLink} className="flexbox-item" style={ {backgroundImage: `url(${website.image})`} }>
                    {/* <ExternalLink href={websites[0].gitLink}>
                        <GoMarkGithub id="git-icon"/>
                    </ExternalLink> */}
                    <div id="dep-link">
                        <h4>{website.name}</h4>
                        <p>{website.technologies}</p>
                    </div>
                </ExternalLink>
            ))}
        </div>
    )
};