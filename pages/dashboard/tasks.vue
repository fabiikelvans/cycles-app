<script setup lang="ts">
import draggable from 'vuedraggable';
import TopBar from "~/components/pages/tasks/TopBar.vue";
import TaskWrapper from "~/components/pages/tasks/TaskWrapper.vue";
import TaskCard from "~/components/pages/tasks/TaskCard.vue";
import StepProgress from '~/components/ui/StepProgress.vue'
import CheckList from "~/components/pages/tasks/CheckList.vue";

definePageMeta({
  layout: 'layout-tasks'
});

useHead({
  title: 'Cycles | Tasks',
})

const board = ref([
  {
    title: "Todo List",
    tasks: [
      {
        id: "1",
        tag_1: "website",
        tag_2: "ui",
        title: "Search inspiration for upcoming website.",
        bgColor: "bg-gradient-to-b from-blue-200 to-blue-100",
        mainColor: "text-blue-800/80",
        color: "blue-800",
        notification: "12",
        links: "8",
        progress: 12,
        progressColor: "bg-blue-800/70",
        note: "Get inspirations from Behance and Dribbble."
      },
      {
        id: "2",
        tag_1: "mobile app",
        tag_2: "client",
        title: "Cycle mobile app design",
        bgColor: "bg-gradient-to-b from-purple-200 to-purple-100",
        mainColor: "text-purple-800/80",
        color: "purple-800",
        notification: "7",
        links: "5",
        checklist: [
          { id: '1', label: 'Create user flow', checked: true },
          { id: '2', label: 'Make wireframe', checked: true },
          { id: '3', label: 'Design UI', checked: true },
          { id: '4', label: 'Write code', checked: false },
          { id: '5', label: 'Test feature', checked: false }
        ],
        note: "We have a meeting at 3:00PM"
      },
      {
        id: "3",
        tag_1: "ux",
        tag_2: "mobile app",
        title: "Make user slow for Coop banking app",
        bgColor: "bg-gradient-to-b from-red-200 to-red-100",
        mainColor: "text-red-800/70",
        color: "red-800",
        notification: "9",
        links: "2",
        progress: 22,
        progressColor: "bg-red-800/70",
      }
    ]
  },
  {
    title: "In Progress",
    tasks: [
      {
        id: "4",
        tag_1: "dashboard",
        tag_2: "social media",
        title: "Search inspiration for upcoming website.",
        bgColor: "bg-gradient-to-b from-orange-200 to-orange-100",
        mainColor: "text-orange-800/80",
        color: "orange-800",
        notification: "6",
        links: "2",
        image: "/assets/images/Dashboard.png",
        note: "To be finished before weekend.",
        progress: 65,
        progressColor: "bg-orange-800/70",
      },
      {
        id: "5",
        tag_1: "product",
        tag_2: "client",
        title: "Design CRM shop product page responsive website",
        bgColor: "bg-gradient-to-b from-green-200 to-green-100",
        mainColor: "text-green-800/80",
        color: "green-800",
        notification: "12",
        links: "8",
        note: "Get inspirations from Behance and Dribbble.",
        progress: 38,
        progressColor: "bg-green-800/80",
      }
    ]
  },
  {
    title: "In Review",
    tasks: [
      {
        id: "6",
        tag_1: "no code",
        tag_2: "product design",
        title: "Crypto landing page create in webflow",
        bgColor: "bg-gradient-to-b from-pink-200 to-pink-100",
        mainColor: "text-pink-800/70",
        color: "pink-800",
        notification: "28",
        links: "9"
      },
      {
        id: "7",
        tag_1: "design",
        tag_2: "code",
        title: "Video platform app web and mobile design",
        bgColor: "bg-gradient-to-b from-indigo-200 to-indigo-100",
        mainColor: "text-indigo-800/70",
        color: "indigo-800",
        notification: "28",
        links: "9"
      },
      {
        id: "8",
        tag_1: "landing page",
        tag_2: "auth",
        title: "Redesign mock website landing page and login",
        bgColor: "bg-gradient-to-b from-amber-200 to-amber-100",
        mainColor: "text-amber-800/70",
        color: "amber-800",
        notification: "28",
        links: "9"
      },
      {
        id: "9",
        tag_1: "mobile app",
        tag_2: "figma",
        title: "Create nutrition app prototype in figma",
        bgColor: "bg-gradient-to-b from-violet-200 to-violet-100",
        mainColor: "text-violet-800/70",
        color: "violet-800",
        notification: "28",
        links: "9"
      }
    ]
  },
  {
    title: "Done",
    tasks: [
      {
        id: "10",
        tag_1: "services",
        tag_2: "agency",
        title: "Cycle full product services",
        bgColor: "bg-gradient-to-b from-cyan-200 to-cyan-100",
        mainColor: "text-cyan-800/80",
        color: "cyan-800",
        notification: "2",
        links: "4",
        checklist: [
          { id: '1', label: 'Branding', checked: true },
          { id: '2', label: 'Mobile app design & development', checked: true },
          { id: '3', label: 'Landing page design', checked: true },
          { id: '4', label: 'Dashboard design & development', checked: false },
          { id: '5', label: 'Marketing', checked: false }
        ]
      },
      {
        id: "11",
        tag_1: "product",
        tag_2: "redesign",
        title: "Redesign Moli mobile app UI",
        bgColor: "bg-gradient-to-b from-orange-200 to-orange-100",
        mainColor: "text-orange-800/70",
        color: "orange-800",
        notification: "28",
        links: "9"
      }
    ]
  }
]);
</script>

<template>
  <div class="flex flex-1 flex-col gap-4 p-4">
    <TopBar />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <TaskWrapper v-for="(column, index) in board" :key="index" :title="column.title">
        <draggable
          v-model="column.tasks"
          :group="{ name: 'tasks', pull: true, put: true }"
          item-key="id"
          class="space-y-4"
        >
          <template #item="{ element }">
            <TaskCard
              :tag_1="element.tag_1"
              :tag_2="element.tag_2"
              :title="element.title"
              :bg-color="element.bgColor"
              :main-color="element.mainColor"
              :notification="element.notification"
              :links="element.links"
            >
              <div class="space-y-3">
                <div v-if="element.image" class="relative rounded-md p-2" :class="`bg-${element.color}/20`">
                  <img src="/assets/images/Dashboard.png" alt="image" width="400" height="400" class="rounded-md" />
                </div>

                <p v-if="element.note" class="text-xs" :class="`${element.mainColor}/60`">
                  Note: {{ element.note }}
                </p>

                <div v-if="element.progress" class="space-y-2 font-medium">
                  <div class="flex items-center justify-between text-sm">
                    <p>Progress</p>
                    <p>{{ element.progress }}%</p>
                  </div>
                  <StepProgress :progress="element.progress" :color="`${element.progressColor}`" />
                </div>

                <CheckList
                  v-if="element.checklist"
                  :items="element.checklist"
                  :color="element.mainColor"
                  :bg_color="`bg-${element.color}/60`"
                />
              </div>
            </TaskCard>
          </template>
        </draggable>
      </TaskWrapper>
    </div>
  </div>
</template>

<style scoped>
.avatar {
  width: 40px;
  height: 40px;
}
</style>
