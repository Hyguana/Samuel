import Link from 'next/Link'

const layoutlink = {
    color: '#333',
    textDecoration: 'none'
}

const layoutMenu = {
    display: 'inline-block',
    minWidth: '150px',
    fontFamily: 'calibri',
    color: '#333'
}

let categories = [
    {
        label: 'Home',
        link:'/index',
        icon:'./public/images/home.png'
    },
    {
        label:'Gás',
        link:'/gas',
        icon: '../public/images/gas.png'
     },
     {
        label:'Produtos Químicos',
        link:'/prodLimpeza',
        icon: '../public/images/clean.png'
     },
     {
        label:'Água',
        link:'/agua',
        icon: '../public/images/water.png'
     },
     {
        label:'Serviços Digitais',
        link:'/servicosDigitais',
        icon:'../public/images/servicesDigitais.png'
     },
     {
        label:'Portifólio',
        link:'/portifolio',
        icon:'../public/images/portfolio.png'
     },
     {
         label:'Sobre',
         link:'/sobre',
         icon:'../public/images/sobre.png'
     },
     {
         label:'Contato',
         link:'/contact',
         icon:'../public/images/contact.png'
     }
]
const Menu = props => (
    <nav>
        <ul>
            {
                categories.map(items =>(
                    <li style={layoutMenu}>
                        <Link href={items.link}>
                            <a style={layoutLink} >{items.label}</a>
                        </Link></li>
                ))
            }
        </ul>
    </nav>
)

export default Menu