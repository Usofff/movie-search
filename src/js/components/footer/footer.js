import gitHubIcon from '../../../assets/svg/github-icon.svg';

class Footer {
    static TextObject = {
        CompanyName: 'Innowise Group',
        GitHubUserName: 'Usofff',
    }

    constructor(){
        this.container = document.createElement('footer');
        this.container.classList.add('footer');
    }

    createFooterLink(linkTitle, linkURL, linkIcon) {
        this.footerLinkContainer = document.createElement('a');
        this.footerLinkContainer.classList.add('footer__link-contaier');
        if(linkIcon) {
            const icon = document.createElement('img');
            icon.src = linkIcon;
            icon.alt = '';
            this.footerLinkContainer.append(icon);
        }
        const footerLink = document.createElement('p');
        footerLink.classList.add('footer__link');
        footerLink.innerText = linkTitle;
        this.footerLinkContainer.href = linkURL;
        this.footerLinkContainer.append(footerLink);
        return this.footerLinkContainer;
    }
    

    render() {
        const companyLink = this.createFooterLink(Footer.TextObject.CompanyName, 'https://innowise-group.com/');
        const gitHubLink = this.createFooterLink(Footer.TextObject.GitHubUserName, 'https://github.com/usofff',gitHubIcon);
        this.container.append(companyLink);
        this.container.append(gitHubLink);
        return this.container;
    }
}

export default Footer;