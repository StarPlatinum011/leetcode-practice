class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        task_fq = Counter(tasks)
        task_heap = [-c for c in task_fq.values()]
        print(task_heap)
        heapq.heapify(task_heap)
        print(task_heap)

        cooldown = deque()
        time = 0

        while task_heap or cooldown:
            time += 1
            if task_heap:
                pop_val = heapq.heappop(task_heap) + 1

                if pop_val != 0:
                    # heapq.heappush(task_heap, pop_val)
                    cooldown.append((time + n, pop_val))

            if(cooldown and cooldown[0][0] == time):
                _, val = cooldown.popleft()
                heapq.heappush(task_heap, val)
            
        return time
        
