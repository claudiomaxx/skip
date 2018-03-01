export function selectTask(task) {
    return {
        type: 'TASK_SELECTED',
        payload: task
    }
}