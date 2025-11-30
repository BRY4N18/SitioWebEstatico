const teamData = [
    {
        name: "Belinda Toaquiza",
        mail: "btoaquizaz@uteq.edu.ec",
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
        mail: "cmanotoaa@uteq.edu.ec",
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
        mail: "jcastrop7@uteq.edu.ec",
        github: "MOIOLDWIN",
        linkgithub: "https://github.com/MOIOLDWIN",
        levelenglish: "B1",
        imageprofile: "https://sga.uteq.edu.ec/media/fotos/2024/05/03/foto_202453132718.jpg",
        profiledescription: "Me gusta programar, CTRL + C, CTRL + V es mi superpoder.",
        experiencetitle: "CIDU",
        experienceyear: "2024",
        experiencedesc: "En el CIDU aprendí a colaborar de forma efectiva, comunicar ideas con mi equipo y sacar adelante proyectos trabajando juntos."
    }
]

document.addEventListener('DOMContentLoaded', () => {

    // A. Detectar si estamos en la página correcta buscando un elemento clave
    const nombreElemento = document.getElementById('name');

    // Si no existe el elemento 'name', significa que no estamos en resume.html, así que no hacemos nada.
    if (!nombreElemento) return;

    // B. Obtener el ID de la URL (ej: resume.html?id=0)
    const params = new URLSearchParams(window.location.search);
    const memberId = params.get('id');

    // C. Validar y Rellenar
    if (memberId !== null && teamData[memberId]) {
        const member = teamData[memberId];

        // Texto simple
        document.getElementById('name').textContent = member.name;
        document.getElementById('levelenglish').textContent = member.levelenglish;
        document.getElementById('profiledescription').textContent = member.profiledescription;
        document.getElementById('experiencetitle').textContent = member.experiencetitle;
        document.getElementById('experienceyear').textContent = member.experienceyear;
        document.getElementById('experiencedesc').textContent = member.experiencedesc;

        // Imagen
        document.getElementById('imageprofile').src = member.imageprofile;

        // Enlaces (Email y Github)
        const mailLink = document.getElementById('mail');
        mailLink.textContent = member.mail;       // Lo que se ve
        mailLink.href = "mailto:" + member.mail;  // Lo que hace al dar click

        const githubLink = document.getElementById('github');
        githubLink.textContent = member.github;   // Lo que se ve
        githubLink.href = member.linkgithub;      // A donde lleva
    } else {
        // Opcional: Si no hay ID o el ID está mal, redirigir al inicio o mostrar error
        console.error("Usuario no encontrado o ID no proporcionado");
        document.getElementById('name').textContent = "Usuario no encontrado";
    }
});

