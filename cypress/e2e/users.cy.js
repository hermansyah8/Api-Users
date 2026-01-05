const baseUrl = "https://reqres.in/api/users?page=2"

describe('Run All Scenario USERS Reqres', () => {
  it('[Positive] Get Users Dengan menggunakan param page 2', () => {
    const payload = {
      method: "GET",
      url: `${baseUrl}`,
      headers: {
        Authorization: "Bearer <session_token>"
      }
    }
    cy.request(payload).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.page).to.eq(2)
      expect(response.body.data).to.have.length(6)
      expect(response.body.data[0]).to.have.all.keys(
        'id',
        'email',
        'first_name',
        'last_name',
        'avatar'
      )
    })
  })

  it('[Negative] Get Users tidak menggunakan Token', () => {
    const payload = {
      method: "GET",
      url: `${baseUrl}`,
      failOnStatusCode: false
    }
    cy.request(payload).then((response) => {
      expect(response.status).to.eq(403)
    })
  })
})