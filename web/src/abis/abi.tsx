export const helloStarknetABI = [
  {
    type: "impl",
    name: "HelloStarknetImpl",
    interface_name: "workshop_frontend::IHelloStarknet",
  },
  {
    type: "struct",
    name: "core::integer::u256",
    members: [
      {
        name: "low",
        type: "core::integer::u128",
      },
      {
        name: "high",
        type: "core::integer::u128",
      },
    ],
  },
  {
    type: "interface",
    name: "workshop_frontend::IHelloStarknet",
    items: [
      {
        type: "function",
        name: "increase_balance",
        inputs: [
          {
            name: "amount",
            type: "core::integer::u256",
          },
        ],
        outputs: [],
        state_mutability: "external",
      },
      {
        type: "function",
        name: "get_balance",
        inputs: [],
        outputs: [
          {
            type: "core::integer::u256",
          },
        ],
        state_mutability: "view",
      },
    ],
  },
  {
    type: "event",
    name: "workshop_frontend::HelloStarknet::Event",
    kind: "enum",
    variants: [],
  },
] as const;
