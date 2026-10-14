import { FeaturedProjectCard } from '../../../components/FeaturedProjectCard';


export default function Portfolio() {
  return (

    <main className='py-20 pt-12 px-6 mx-auto'>

      <div className="text-center  mx-auto mb-16">
        <div className="text-primary text-sm font-bold tracking-wider uppercase mb-2">
          Complete Portfolio
        </div>

        <h2 className="text-4xl font-extrabold text-foreground leading-tight">
          All My  <span className="text-transparent bg-clip-text bg-primary">Creations</span>
        </h2>
        <p className="text-lg text-text-secondary max-w-xl leading-relaxed text-center w-full mx-auto">
          A comprehensive archive of everything I've built—from full-stack web applications and tools to experimental builds.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* HandoutAI */}
        <FeaturedProjectCard
          mainTitle="Featured Project"
          title="HandoutAI"
          description="AI-powered platform that turns university handouts into MCQ practice quizzes. Students can study, test, track progress and improve."
          image="/handout.png"
          technology={['Next.js', 'TypeScript', 'MongoDB', 'AI']}
          // link="https://handoutai.vercel.app/"
          link="https://handoutai.online/"
          gitHubLink="https://github.com/TalhaRajput501"
        />


        {/* Inventory Management System */}
        <FeaturedProjectCard
          title="Inventory Management System"
          description="Complete inventory management solution with POS, stock tracking, reports, and multi-user management. It supports multi-user access with role-based permissions."
          image="./lightInventory.webp"
          technology={['React', 'Node.js', 'Express', 'MongoDB']}
          link="https://inventoryflow.azurewebsites.net/"
          gitHubLink="https://www.github.com/TalhaRajput501/stock-management-system"
        />

        {/* E-Commerce Platform */}
        <FeaturedProjectCard
          title="E-Commerce Platform"
          description="Full-featured e-commerce platform with product management, cart, payments, and order tracking. Designed with administrative order management views."
          image="./ecom.png"
          technology={['Next.js', 'Stripe', 'Tailwind', 'MongoDB']}
          // link="https://complete-me-beta.vercel.app/"
          link="https://ecom.talhadev.tech/"
          gitHubLink="#"
        />

        {/* WiseBlogs */}
        <FeaturedProjectCard
          title="WiseBlogs — Full-Stack Blog Platform"
          description="Built a full-stack blog platform where users can create, edit, and delete posts with rich text and images. It includes secure authentication, image uploads, and a modern responsive UI."
          image="/blog.webp"
          technology={['React', 'Express', 'App Write']}
          link="https://wiseblogs.vercel.app"
          gitHubLink="https://www.github.com/TalhaRajput501/BlogWise"
        />

      </div>

    </main>
  );
}