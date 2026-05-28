# State Plan for UserList Component

1 What state do i need?

- `users`
- `loading`
- `error`

2. One object or multiple useState calls?

- Multiple useState calls (`users`, `loading`, `error`)

3. Representing "empty" vs "not loaded yet"?

- Not loaded yet: `loading: true`
- Empty (loaded but no data): `loading: false`, `users:[]`, `error:null`

4. What triggers a refetch?

- Clicking the "Refresh" button
- Component mount (via useEffect)
- Any manual retry after an error
