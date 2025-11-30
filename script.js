const teamData = [
    {
        name: "Bryan Lombeida",
        mail: "Blombeidae@uteq.edu.ec",
        github: "BRY4N18",
        linkgithub: "https://github.com/BRY4N18",
        levelenglish: "B1",
        imageprofile: "https://scontent.fgye1-2.fna.fbcdn.net/v/t39.30808-6/404364440_3784589148494174_7541032123581910946_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGU80JtKxJK23O7_CvSpan9nwInX8dUbfafAidfx1Rt9nvBb6HM3GkdDKMlBBXJXxy_zaeBPXYMPkaaYK04ayHv&_nc_ohc=1vtw5HxbUcgQ7kNvwHob_Kc&_nc_oc=AdlQadQYkLuIjzisiVyGoBgvZCYMieRD9AmzTFq2JU7BNeDvJIaB4-5sKmh3QJE56oXIfJZaMeDmP7aYLhWG2coe&_nc_zt=23&_nc_ht=scontent.fgye1-2.fna&_nc_gid=B0vvdzowjgGo_zTnXkMZqA&oh=00_Afgavu9bVWi2ZUrFgxnvvyWrj3HDM8deOhJ5UgJkkim7jw&oe=693254D1",
        profiledescription: "Soy estudiante de ingeniera de software. Me gusta programar, ya que asi me siento un dios. Actualmente estoy cursando el 5to semestre de la carrera.",
        experiencetitle: "CIDU",
        experienceyear: "2024",
        experiencedesc: "En el cidu aprendi mucho sobre como trabajar de manera grupal"
    },
    {
        name: "Carlos Manotoa",
        mail: "Cmanotoaa@uteq.edu.ec",
        github: "CARLOS",
        linkgithub: "https://github.com/BRY4N18",
        levelenglish: "Z0",
        imageprofile: "https://sga.uteq.edu.ec/media/fotos/2023/11/25/foto_20231125211937.jpg",
        profiledescription: "Soy estudiante de ingeniera de software. Me gusta programar y el huevo. Actualmente estoy cursando el 5to semestre de la carrera.",
        experiencetitle: "Administrador y gestor de perras",
        experienceyear: "2025",
        experiencedesc: "En eso siempre aprendo a una manera increible"
    }
]

const Name = document.getElementById('name')
const Mail = document.getElementById('mail')
const Github = document.getElementById('github')
const LevelEnglish = document.getElementById('levelenglish')
const ImageProfile = document.getElementById('imageprofile')
const ProfileDescription = document.getElementById('profiledescription')
const ExperienceTitle = document.getElementById('experiencetitle')
const ExperienceYear = document.getElementById('experienceyear')
const ExperienceDesc = document.getElementById('experiencedesc')


function OpenProfile(id){
    const member = teamData[id]
    Name.textContent = member.name
    Mail.textContent = "mailto:"+member.mail
    Mail.href = member.mail
    Github.textContent = member.github
    Github.href = member.linkgithub
    LevelEnglish.textContent = member.levelenglish
    ImageProfile.src = member.imageprofile
    ProfileDescription.textContent = member.profiledescription
    ExperienceTitle.textContent = member.experiencetitle
    ExperienceYear.textContent = member.experienceyear
    ExperienceDesc.textContent = member.experiencedesc
}

