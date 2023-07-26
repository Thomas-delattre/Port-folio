import React from 'react';

const SocialNetwork = () => {

    const anim = () => {
        const icons = document.querySelectorAll(".social-network a");

        icons.forEach((link) => {
            link.addEventListener("mouseover", (e) => {
                link.style.transform = `translate(${e.offsetX - 20}px, ${e.offsetY - 13}px)`;
                    });
                    link.addEventListener("mouseleave", () => {
                        link.style.transform = "";
                    });
    });
};

    return (
       <div className="social-network">
        <ul className="content">
            <a href='https://github.com/Thomas-delattre/' target='_blank' rel='noopener noreferrer' className='hover' onMouseOver={anim}>
                <li>
                    <i class="fa-brands fa-github"></i>
                </li>
            </a>
            <a href='www.linkedin.com/in/thomas-delattre-dev/' target='_blank' rel='noopener noreferrer' className='hover' onMouseOver={anim}>
                <li>
                <i class="fa-brands fa-linkedin"></i>
                </li>
            </a>
        </ul>
       </div>
    );
};

export default SocialNetwork;