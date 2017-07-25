clients: [
  {
    name: 'Client 1',
    email: 'client1@email.com,
    projects: [
      {
        id: 2
        name: Project 1,
        bill_rate: 150.00
      },
      {
        id: 4
        name: Project 2,
        bill_rate: 100.00
      }
    ]
  }
  {
    name: 'Client 2',
    email: 'client2@email.com,
    projects: [
      {
        id: 3
        name: Project 3,
        bill_rate: 150
      },
      {
        id: 7
        name: Project 4,
        bill_rate: 100
      }
    ]
  }
]

user: {
  id: 1,
  name: "Malki",
  email: 'malki@email.com',
  bill_rate: 200,
  company: ''
}

tasks: {
  billed: [
    {
      client_id: 1,
      project_id: 2,
      bill_rate: 220,
      time_time: 1
      description: "Lorum Ipsum",
      billed: true,
      total: 220,
      date: 2017-07-24,
      id: 4
    },
    {
      client_id: 3,
      project_id: 4,
      bill_rate: 120,
      time_time: 2
      description: "Lorum Ipsum",
      billed: true,
      total: 240,
      date: 2017-07-20,
      id: 50
    }
  ]
  unbilled: [
    {
      client_id: 5,
      project_id: 34,
      bill_rate: 220,
      time_time: 1
      description: "Lorum Ipsum",
      billed: false,
      total: 220,
      date: 2017-07-24,
      id: 40
    },
    {
      client_id: 3,
      project_id: 4,
      bill_rate: 120,
      time_time: 2
      description: "Lorum Ipsum",
      billed: false,
      total: 240,
      date: 2017-07-20,
      id: 34
    }
  ]
}