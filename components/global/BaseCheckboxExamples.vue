<template>
  <div style="width: 200px; margin: auto; display: flex; gap: 24px" >
    <div>
      <BaseCheckbox />
      <br>
      <BaseCheckbox defaultChecked />
    </div>

    <div>
      <BaseCheckbox>
        <template #checkmark="{ checked }">
          <i
              class="fa fa-check"
              :style="{
                             color: checked ? 'green' : 'gray',
                             fontSize: '32px'
                          }"
          />
        </template>
      </BaseCheckbox>
      <br>
      <BaseCheckbox defaultChecked>
        <template #checkmark="{ checked }">
          <i
              class="fa fa-check"
              :style="{
                             color: checked ? 'green' : 'gray',
                             fontSize: '32px'
                          }"
          />
        </template>
      </BaseCheckbox>
    </div>

    <div>
      <BaseCheckbox>
        <template #checkmark="{ checked }">
          <i
              class="fa fa-bus"
              :style="{
                             color: checked ? 'purple' : 'gray',
                             fontSize: '32px'
                          }"
          />
        </template>
      </BaseCheckbox>
      <br>
      <BaseCheckbox defaultChecked >
        <template #checkmark="{ checked }">
          <i
              class="fa fa-bus"
              :style="{
                             color: checked ? 'purple' : 'gray',
                             fontSize: '32px'
                          }"
          />
        </template>
      </BaseCheckbox>
    </div>
    <div style="align-self: center">
      <BaseCheckbox  color="info" size="large" defaultChecked/>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BaseCheckbox } from 'vuetage'

</script>