<script setup lang="ts">

</script>

<template>
  <div class="py-12 md:py-24">
    <Card class="p-0 bg-[#0d1018] text-white border-white/10">
    <div class="relative overflow-hidden rounded-xl">
      <!-- Background Image -->
      <div class="w-full h-full absolute top-0 left-0 py-2 transform -translate-y-1 overflow-hidden z-0">
        <img
          src="/assets/images/grid/dots.svg"
          alt="dots icon"
          class="object-cover w-full h-full opacity-10"
        />
      </div>

      <div class="h-44 w-44 bg-white/10 blur-3xl absolute top-0 left-0 overflow-hidden" />

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="px-10 my-12 h-full">
          <div class="space-y-3">
            <h1 class="text-lg">
              "Adorn took our brand to new heights with their innovative designs and strategic approach. Their team's creativity and attention to detail truly set them apart."
            </h1>

            <div class="">
              <h4 class="text-neutral-400">John Smith</h4>
              <p class="text-neutral-500 text-sm font-normal">CEO of Bright Ideas Co.</p>
            </div>
          </div>
        </div>


        <div></div>
        <div class="relative">
          <img src="https://images.unsplash.com/photo-1543269664-02e941c052f7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHVzaW5nJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
               alt=""
          class="object-cover w-full h-full opacity-100 rounded-r-xl">
        </div>
      </div>
    </div>
    </Card>
  </div>
</template>

<style scoped>

</style>
