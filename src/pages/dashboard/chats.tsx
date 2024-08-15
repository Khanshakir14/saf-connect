import DashboardLayout from '../../layouts/DashboardLayout'

const Chats = () => {
  return (
    <DashboardLayout>
     <ul class="px-5 space-y-2">
  <li>
    <a href="chats/dr" class="block p-4 px-2 shadow-md hover:shadow-lg transition-shadow rounded-md">
    <div class="flex justify-between">
      <div class="flex items-center">
        <div>
          <img src="https://picsum.photos/200/200" class="size-14 rounded-full" alt="doctor"/>
        </div>
        <div class="pl-2">
          <h2 class="font-semibold text-lg">Dr. Pragya Thakur</h2>
          <h3 class="text-xs text-neutral-500  leading-3">Skin Specialist</h3>
          <div class="text-sm leading-6">"Dr i hve problem with my skin"</div>
        </div>
      </div>
      
    </div>
    </a>
  </li>
  <li>
   <a href="chats/dr" class="block p-4 px-2 shadow-md hover:shadow-lg transition-shadow rounded-md">
    <div class="flex justify-between">
      <div class="flex items-center">
        <div>
          <img src="https://picsum.photos/200/200" class="size-14 rounded-full" alt="doctor"/>
        </div>
        <div class="pl-2">
          <h2 class="font-semibold text-lg">Dr. Vivek Obroy</h2>
          <h3 class="text-xs text-neutral-500  leading-3">heart Specialist</h3>
          <div class="text-sm leading-6">"Dr i hve problem with my heart"</div>
        </div>
      </div>
      
    </div>
    </a>
  </li>
  <li>
    <a href="/chats/dr" class="block p-4 px-2 shadow-md hover:shadow-lg transition-shadow rounded-md">
    <div class="flex justify-between">
      <div class="flex items-center">
        <div>
          <img src="https://picsum.photos/200/200" class="size-14 rounded-full" alt="doctor"/>
        </div>
        <div class="pl-2">
          <h2 class="font-semibold text-lg">Dr. Murtuza Makhija</h2>
          <h3 class="text-xs text-neutral-500  leading-3">Bone Specialist</h3>
          <div class="text-sm leading-6">"Dr i hve problem with my bones"</div>
        </div>
      </div>
      
    </div>
    </a>
  </li>
 
</ul>
    </DashboardLayout>
  )
}

export default Chats