import DashboardLayout from '../../layouts/DashboardLayout'

const Home = () => {
  return (
    <DashboardLayout>
      <main>
    <div class="text-sm text-nowrap p-4 pb-0 font-bold text-neutral-500 uppercase ">Recent Visits</div>
  <nav class="flex overflow-x-scroll">
    <a  href="/doctor/chat/2">
      <img src="https://picsum.photos/50/50" alt="doctor" class=" rounded-full m-2" />
    </a>
    <a  href="/doctor/chat/2">
      <img src="https://picsum.photos/50/50" alt="doctor" class=" rounded-full m-2" />
    </a>
    <a  href="/doctor/chat/2">
      <img src="https://picsum.photos/50/50" alt="doctor" class=" rounded-full m-2" />
    </a>
    <a  href="/doctor/chat/2">
      <img src="https://picsum.photos/50/50" alt="doctor" class=" rounded-full m-2" />
    </a>
    <a  href="/doctor/chat/2">
      <img src="https://picsum.photos/50/50" alt="doctor" class=" rounded-full m-2" />
    </a>
    <a  href="/doctor/chat/2">
      <img src="https://picsum.photos/50/50" alt="doctor" class=" rounded-full m-2" />
    </a>
    <a  href="/doctor/chat/2">
      <img src="https://picsum.photos/50/50" alt="doctor" class=" rounded-full m-2" />
    </a>
  </nav>
    <div class="text-sm text-nowrap p-4 pb-2 font-bold text-neutral-500 uppercase ">Appointments</div>
  <ul class="space-y-2 px-5">

    <li>
      <a href="/chats/doctor" class="block rounded-md border border-sky-500  p-2 text-neutral-600 shadow-md transition-shadow hover:shadow-lg">
        <div class="flex items-center justify-between">
          <div class="block text-xs font-semibold uppercase">Dr. Azizunnisa</div>
          <div class="block text-xs font-medium">in 2 days</div>
        </div>
        <span class="text-sm text-green-600">at 8:00 am</span>
      </a>
    </li>
    <li>
      <a href="/chats/doctor" class="block rounded-md border border-sky-500  p-2 text-neutral-600 shadow-md transition-shadow hover:shadow-lg">
        <div class="flex items-center justify-between">
          <div class="block text-xs font-semibold uppercase">Dr. Azizunnisa</div>
          <div class="block text-xs font-medium">in 2 days</div>
        </div>
        <span class="text-sm text-green-600">at 8:00 am</span>
      </a>
    </li>
    <li>
      <a href="/chats/doctor" class="block rounded-md border border-sky-500  p-2 text-neutral-600 shadow-md transition-shadow hover:shadow-lg">
        <div class="flex items-center justify-between">
          <div class="block text-xs font-semibold uppercase">Dr. Azizunnisa</div>
          <div class="block text-xs font-medium">in 2 days</div>
        </div>
        <span class="text-sm text-green-600">at 8:00 am</span>
      </a>
    </li>
  </ul>
  <button type="button" class="fixed bottom-20 right-6 bg-sky-500 text-neutral-50 py-2 pr-6 pl-4 rounded-full flex items-center">
    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" class="size-6 mr-2" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 5.6L5 7l1.4-2.5L5 2l2.5 1.4L10 2L8.6 4.5L10 7zm12 9.8L22 14l-1.4 2.5L22 19l-2.5-1.4L17 19l1.4-2.5L17 14zM22 2l-1.4 2.5L22 7l-2.5-1.4L17 7l1.4-2.5L17 2l2.5 1.4zm-8.66 10.78l2.44-2.44l-2.12-2.12l-2.44 2.44zm1.03-5.49l2.34 2.34c.39.37.39 1.02 0 1.41L5.04 22.71c-.39.39-1.04.39-1.41 0l-2.34-2.34c-.39-.37-.39-1.02 0-1.41L12.96 7.29c.39-.39 1.04-.39 1.41 0"/></svg>
    
    Ask AI Doctor</button>
</main>
    </DashboardLayout>
  )
}

export default Home