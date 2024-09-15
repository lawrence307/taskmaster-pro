import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [tasks, setTasks] = useState({ todo: [], inProgress: [], completed: [] });

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('/api/tasks');
      // Process tasks based on status
      const tasksData = response.data.reduce((acc, task) => {
        acc[task.status].push(task);
        return acc;
      }, { todo: [], inProgress: [], completed: [] });

      setTasks(tasksData);
    };

    fetchTasks();
  }, []);

  return 
    // Render tasks as shown in the static example above
  ;
};

export default Dashboard;

