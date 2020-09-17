---
title: Getting Started - Try It - Micro-Frontends
hide_title: true
sidebar_label: Overview
slug: /getting-started/try-it/micro-frontends
---

# Blog on Fixing the issue with azure function hosting runtime


[9:53 AM] Alan Chavis (Guest)
    Failed to acquire app lease with appLeaseId d98c1dd4-008f-04b2-e980-0998ecf8427e. Another app likely has the lease on this container. Exception: There is already a lease present.
​[10:15 AM] Alan Chavis (Guest)
    I figured out how to manually break the leases on those containers...  testing the api
​[10:16 AM] Michael Gearhardt
    i just saw in the exception you sent:

ppLeaseId d98c1dd4-008f-04b2-e980-0998ecf8427e

​[10:16 AM] Michael Gearhardt
    so the other appLease container had leases with specfic ids to delete?
​[10:16 AM] Alan Chavis (Guest)
    yes I think so
​[10:16 AM] Alan Chavis (Guest)
    there was one more
​[10:17 AM] Alan Chavis (Guest)
    fathymforecast-leases\default
​[10:17 AM] Alan Chavis (Guest)
    and
​[10:17 AM] Alan Chavis (Guest)
    fathymforecase-applease
​[10:17 AM] Alan Chavis (Guest)
    both had leases
