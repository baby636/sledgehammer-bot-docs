---
sidebar_position: 6
title: 🚨 Raidban
---

<!-- Imports -->
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- Documentation -->
This command is used to ban users based on the discord's default join message, selecting a start and a finishing message, you'll be able to select those users (useful for raids).

```
/raidban
```

**Parameters**

\*Required

**first_message\***

    type: String

    description: First message (id or link) to ban users

**last_message\***

    type: String

    description: Last message (id or link) to ban users

:::info

If you do not know how to grab the message id/link, check [this article](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID) by Discord.

:::

**reason\***

    type: String

    description: Reason to ban the users for

**channel\***

    type: Text Channel

    description: Channel of these messages

:::note

This option is only needed if you provided message id.

:::

**global**

    type: Boolean

    description: Global ban the users

    default: False

**role-check**

    type: Boolean

    description: Whether to ban accounts with roles or not

    default: False

**age**

    type: Number

    description: Accounts older then this value (in days) won't get banned

**days**

    type: Option

    description: Number of days to delete messages

    options: [ 0 to 7 ]

    default: 7

**Example Usage**

<Tabs>
<TabItem value="withids" label="Usage with Message ID" default>

```
/raidban first_message:966723570824773703 last_message:968461919289765908 reason:Raid channel:#welcome
```

</TabItem>
<TabItem value="withlinks" label="Usage with Message Link">

```
/raidban first_message:https://discord.com/channels/966723419775311882/966723419775311885/966723570824773703 last_message:https://discord.com/channels/966723419775311882/966723419775311885/967010103322636298 reason:Raid
```

</TabItem>
</Tabs>


:::info

If you do not know how to grab the message id/link, check [this article](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID) by Discord.

:::
