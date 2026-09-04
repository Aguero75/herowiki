import { beforeEach, describe, expect, it, vi } from "vitest";
import { GET } from "../../app/api/hero/route";

describe("GET /api/hero", () => {
  beforeEach(() => {
    process.env.SUPERHERO_API_TOKEN = "test-token";
    vi.restoreAllMocks();
  });

  it("returns the upstream hero search response", async () => {
    const upstreamResponse = {
      response: "success",
      results: [{ id: "70", name: "Iron Man" }],
    };
    const fetchMock = vi
      .spyOn(globalThis, "fetch")
      .mockResolvedValue(new Response(JSON.stringify(upstreamResponse)));

    const response = await GET(
      new Request("http://localhost/api/hero?name=Iron%20Man"),
    );

    expect(fetchMock).toHaveBeenCalledWith(
      "https://superheroapi.com/api/test-token/search/Iron%20Man",
    );
    expect(response.status).toBe(200);
    expect(await response.json()).toEqual(upstreamResponse);
  });
});
