import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToDo } from './models/todoItem';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layouts/Layout';
import { NotFound } from './pages/NotFound';
import { HomePage } from './pages/HomePage';

const todos: ToDo[] = [
  {
    id: 0,
    text: 'Первая задача',
    isDone: false
  },
  {
    id: 1,
    text: 'Вторая задача',
    isDone: true
  },
  {
    id: 2,
    text: 'Третья задача',
    isDone: false
  },
  {
    id: 3,
    text: 'Четвертая задача',
    isDone: true
  }
];

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path:'/', element: <HomePage todos={todos} /> },
      { path:'/todo', element: <ToDoListPage /> },
      { path:'/list/:id', element: <ItemDescription todos={todos}/> },
    ]
   },
   { path: '*', element: <NotFound />}
], {basename: '/app/'})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
);


{/* <Routes>
<Route path='/' element={<HomePage todos={todos} />}/>
<Route path='/list/:id' element={<ItemDescription todos={todos}/>}/>
<Route path='/todo' element={<ToDoListPage />} />
<Route path='*' element={<NotFound />} />
</Routes> */}