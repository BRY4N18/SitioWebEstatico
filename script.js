const teamData = [
    {
        name: "Belinda Toaquiza",
        mail: "Btoaquizaz@uteq.edu.ec",
        github: "BelindaTZ",
        linkgithub: "https://github.com/BelindaTZ",
        levelenglish: "B2",
        imageprofile: "https://sga.uteq.edu.ec/media/fotos/2023/05/17/foto_2023517153946.jpg",
        profiledescription: "Soy estudiante de ingeniera de software. Disfruto programar y, aunque enfrento adversidades, las veo como parte de la diversión. Actualmente estoy cursando el 5to semestre de la carrera.",
        experiencetitle: "CIDU",
        experienceyear: "2024",
        experiencedesc: "En el CIDU aprendí mucho sobre los procesos de presentar una ponencia y me preparé para exponer frente a un público entusiasta. Considero que fue una experiencia educativa muy enriquecedora."
    },
    {
        name: "Carlos Manotoa",
        mail: "Cmanotoaa@uteq.edu.ec",
        github: "CarlosMC2004",
        linkgithub: "https://github.com/CarlosMC2004",
        levelenglish: "B1",
        imageprofile: "https://sga.uteq.edu.ec/media/fotos/2023/11/25/foto_20231125211937.jpg",
        profiledescription: "Soy estudiante de 5to semestre de ingeniera de software. Me gusta programar y aprender de tecnología e innovación.",
        experiencetitle: "CIDU, Amazon, Google, Meta, OpenIA",
        experienceyear: "2024",
        experiencedesc: "Todas estas experiencia aporta al desarrolla personal y profesional"
    },
    {
        name: "Bryan Lombeida",
        mail: "Blombeidae@uteq.edu.ec",
        github: "BRY4N18",
        linkgithub: "https://github.com/BRY4N18",
        levelenglish: "B1",
        imageprofile: "https://scontent.fgye1-2.fna.fbcdn.net/v/t39.30808-6/404364440_3784589148494174_7541032123581910946_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGU80JtKxJK23O7_CvSpan9nwInX8dUbfafAidfx1Rt9nvBb6HM3GkdDKMlBBXJXxy_zaeBPXYMPkaaYK04ayHv&_nc_ohc=1vtw5HxbUcgQ7kNvwGXneEm&_nc_oc=AdkqZjnfScKnnolOEt8KbCRptLT-B4WOHKZp_HgY8LXyHaV8Gu0iaEErSS8pjfYMijPqEM6TJScd4esOcFlbAhP4&_nc_zt=23&_nc_ht=scontent.fgye1-2.fna&_nc_gid=MGhUUVEvGJCsrXYtfs_gSw&oh=00_Afg18m0MzZgZQoYhl8si91MwnPdxkVUImkBucO-igkCkXw&oe=69328D11",
        profiledescription: "Soy estudiante de ingeniera de software. Me gusta programar, ya que asi me siento un dios. Actualmente estoy cursando el 5to semestre de la carrera.",
        experiencetitle: "CIDU",
        experienceyear: "2024",
        experiencedesc: "En el cidu aprendi mucho sobre como trabajar de manera grupal"
    },
    {
        name: "Justyn Castro",
        mail: "Jcastrop7@uteq.edu.ec",
        github: "MOIOLDWIN",
        linkgithub: "https://github.com/MOIOLDWIN",
        levelenglish: "B1",
        imageprofile: "https://sga.uteq.edu.ec/media/fotos/2024/05/03/foto_202453132718.jpg",
        profiledescription: "Me gusta programar, CTRL + C, CTRL + V es mi superpoder.",
        experiencetitle: "CIDU",
        experienceyear: "2024",
        experiencedesc: "En el CIDU aprendí a colaborar de forma efectiva, comunicar ideas con mi equipo y sacar adelante proyectos trabajando juntos."
    },
    {
        name: "Anthony Arana",
        mail: "aaranam5@uteq.edu.ec",
        github: "AnthonyArana1725",
        linkgithub: "https://github.com/AnthonyArana1725",
        levelenglish: "B1",
        imageprofile: "https://sga.uteq.edu.ec/media/fotos/2023/05/18/foto_2023518184032.jpg",
        profiledescription: "Soy estudiante de 5 semestre de la ingeniería de software. Me gusta programar, asi se aprende de prueba y error",
        experiencetitle: "CIDU",
        experienceyear: "2024",
        experiencedesc: "Desarrolle el trabajo colaborativo"
    }
]

const params = new URLSearchParams(window.location.search)
const memberId = params.get('id')

const Name = document.getElementById('name')
const Mail = document.getElementById('mail')
const Github = document.getElementById('github')
const LevelEnglish = document.getElementById('levelenglish')
const ImageProfile = document.getElementById('imageprofile')
const ProfileDescription = document.getElementById('profiledescription')
const ExperienceTitle = document.getElementById('experiencetitle')
const ExperienceYear = document.getElementById('experienceyear')
const ExperienceDesc = document.getElementById('experiencedesc')

const member = teamData[memberId]
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